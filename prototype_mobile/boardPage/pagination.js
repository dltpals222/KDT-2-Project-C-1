const articles = [
  "게시글 1",
  "게시글 2",
  "게시글 3",
  "게시글 4",
  "게시글 5",
  "게시글 6",
  "게시글 7",
  "게시글 8",
  "게시글 9",
  "게시글 10",
  "게시글 11",
  "게시글 12",
];
const pageSize = 4;
const pageCount = Math.ceil(articles.length / pageSize);
const buttonCount = 5;

let currentPage = 1;

function renderArticles() {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, articles.length);

  const reversedArticles = articles.slice().reverse(); // 배열을 뒤집음

  const articleList = document.createElement("ul");
  for (let i = startIndex; i < endIndex; i++) {
    const articleItem = document.createElement("li");
    articleItem.innerText = reversedArticles[i];
    articleList.appendChild(articleItem);
  }

  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(articleList);
}

function renderButtons() {
  const buttonList = document.createElement("ul");

  const firstButton = document.createElement("li");
  firstButton.innerText = "맨 앞";
  firstButton.addEventListener("click", () => {
    currentPage = 1;
    renderArticles();
    renderButtons();
  });
  buttonList.appendChild(firstButton);

  const prevButton = document.createElement("li");
  prevButton.innerText = "이전";
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderArticles();
      renderButtons();
    }
  });
  buttonList.appendChild(prevButton);

  const startButtonNumber = Math.max(
    1,
    currentPage - Math.floor(buttonCount / 2)
  );
  const endButtonNumber = Math.min(
    startButtonNumber + buttonCount - 1,
    pageCount
  );

  for (let i = startButtonNumber; i <= endButtonNumber; i++) {
    const button = document.createElement("li");
    button.innerText = i;
    if (i === currentPage) {
      button.classList.add("active");
    } else {
      button.addEventListener("click", () => {
        currentPage = i;
        renderArticles();
        renderButtons();
      });
    }
    buttonList.appendChild(button);
  }

  const nextButton = document.createElement("li");
  nextButton.innerText = "다음";
  nextButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      renderArticles();
      renderButtons();
    }
  });
  buttonList.appendChild(nextButton);

  const lastButton = document.createElement("li");
  lastButton.innerText = "맨 뒤";
  lastButton.addEventListener("click", () => {
    currentPage = pageCount;
    renderArticles();
    renderButtons();
  });
  buttonList.appendChild(lastButton);

  const root = document.getElementById("root");
  root.appendChild(buttonList);
}

renderArticles();
renderButtons();
