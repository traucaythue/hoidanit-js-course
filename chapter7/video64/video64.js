console.log("video 64");

const doSomething = () => {
  const a = 10,
    b = 1;

  if (b === 0) {
    throw new Error("Thực hiện phép chia cho 0");
  }

  console.log(a / b);
};

try {
  doSomething();
} catch (error) {
  console.log("Chương trình có lỗi ", error);
} finally {
  console.log("Run final");
}
