console.log("video 40");

const myScores = [4, 5, 2, 8, 5, 7];

myScores.forEach((value, index) => {
  console.log("index ", index + " value ", value);
});

console.log("==========");

const myScoresX2 = myScores.map((value, index) => {
  return value * 2;
});

console.log(myScoresX2);
