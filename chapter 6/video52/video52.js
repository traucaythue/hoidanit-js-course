console.log("video 52");

const myMainTitle = document.getElementById("mainTitle");

const changeTextBtn = document.getElementById("myBtn");
const changeBackTextBtn = document.getElementById("myBackBtn");

changeTextBtn.addEventListener("click", () => {
  console.log("Don't click me!!!");

  myMainTitle.innerText = "Content has changed";
});

changeBackTextBtn.addEventListener("click", () => {
  myMainTitle.innerText = "Video 52";
});

console.log("Congratuation");
