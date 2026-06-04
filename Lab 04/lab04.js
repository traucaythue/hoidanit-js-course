console.log("Lab 04");

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const loginBtnElement = document.getElementById("loginBtn");

loginBtnElement.addEventListener("click", () => {
  const username = "hoidanit@gmail.com";
  const password = "123456";
  if (
    usernameElement.value === username &&
    passwordElement.value === password
  ) {
    alert("Đăng nhập thành công!");
    window.location.href = "success.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
});
