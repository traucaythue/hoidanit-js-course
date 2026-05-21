console.log("video 32");

//Keyword return

const sum = (a, b, c) => {
  console.log("Run before");

  if (typeof a !== "number") {
    console.log("Run empty");
    return;
  }

  return a + b + c;

  console.log("Run after");
};

console.log(sum("5", 5, 6));
