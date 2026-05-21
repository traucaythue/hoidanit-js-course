console.log("video 33");

let globalVar = "I'm global Var";
function show() {
  console.log(globalVar);
}

show();
console.log(globalVar);

function sayHi() {
  let name = "hoidanit";
  console.log("Hi", name);

  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // ✅ Truy cập được
  }
  console.log(x); // ❌ Lỗi: x is not defined
}

sayHi();
console.log("Xin chao", name);
