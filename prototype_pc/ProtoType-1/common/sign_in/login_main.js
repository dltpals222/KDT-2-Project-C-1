/*
<h3>This is login page for tesing.</h3>
<br />

<div id="container">
  ID : <input type="text" placeholder="ID를 입력하세요" id="userid" />
  <br />
  PW : <input type="password" placeholder="비밀번호" id="userpw" />
  <input type="button" value="로그인" id="signinButton" />
</div>

<script type="text/javascript">
  console.log(document); // html 태그 전체를 콘솔에 띄워주자.

  const signinButton = document.getElementById("signinButton"); // 버튼을 만들고.

  signinButton.style.width = "50px";
  signinButton.style.height = "50px";
  signinButton.style.backgroundColor = "lightgray";
  signinButton.style.textAlign = "center";

  //const textButton = document.getElementById(signinButton);

  signinButton.addEventListener("click", signinFunc); // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.

  function signinFunc() {
    const userid = document.getElementById("userid").value; // userid 의 값을 받아와 넣음.
    const userpw = document.getElementById("userpw").value; // userpw 의 값을 받아와 넣음.

    if (userid == "polytech" && userpw == "12345678") {
      alert("로그인 성공");
      console.log("로그인 성공했습니다.");
    } else {
      alert("로그인 실패");
      console.log("로그인 실패했습니다.");
    }
  }
  */

const main = tagMakeCall(root, "div", "", function (element) {
  element.setAttribute("id", "main");
});

/*
const container = document.getElementById("root");
//div.setAttribute("id", container);
div.style.backgroundColor = "lightsalmon";
div.style.width = "100px";
div.style.height = "80px";
div.style.display = "flex";
div.style.flexDirection = "column";

const idBox = document.createElement("input");
idBox.setAttribute("id", idbox);
idBox.setAttribute("type", text);
*/
