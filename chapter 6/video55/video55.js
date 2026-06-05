console.log("video 55");

const usernameElement = document.getElementById("username");
const checkBtnElement = document.getElementById("checkBtn");

const previousNameElement = document.getElementById("previousName");
const savedPreviousName = localStorage.getItem("element");
if (savedPreviousName) {
  previousNameElement.innerText = `${savedPreviousName}`;
}

checkBtnElement.addEventListener("click", () => {
  localStorage.setItem("element", usernameElement.value);
  document.getElementById("currentName").innerText = `${usernameElement.value}`;
});
