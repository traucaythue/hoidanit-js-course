console.log("video41");

//Khai bao Array

const ages = [15, 20, 17, 9, 32, 21, 4, 16];

//forEach
ages.forEach((value, index) => {
  console.log("Ages: ", ages);
});

//map() method
const agesX2 = ages.map((value, index) => {
  return value * 2;
});

console.log("Array X2: ", agesX2);

//filter() method
const agesGreatThan15 = ages.filter((value, index) => {
  return value > 15;
});

console.log("Ages great than 15 is: ", agesGreatThan15);
