// JSON 파일을 가져오는 함수
function getJSON(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.status);
      }
    };
    xhr.onerror = function () {
      reject(Error("Network Error"));
    };
    xhr.send();
  });
}

// JSON 파일의 내용을 HTML에 표시하는 함수
function displayJSON(json) {
  var output = document.getElementById("output");
  output.innerHTML = JSON.stringify(json);
}

// JSON 파일을 가져와서 표시하는 메인 함수
function main() {
  var jsonUrl = "파일의_경로.json"; // JSON 파일의 경로
  getJSON(jsonUrl)
    .then(function (json) {
      displayJSON(json);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

// 메인 함수 호출
main();
