console.log("video 53");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("myText");

console.log(myBtnElement, backBtnElement, myTextElement);

myBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "blue";
  myTextElement.style.backgroundColor = "red";
});

backBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
});
