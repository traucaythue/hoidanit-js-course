console.log("video 43");

//Khai báo info obj
const myInformation = {
  myName: "Tung",
  myAge: 23,
  myAddress: "Hai Phong",
};

console.log("My information is: ", myInformation);

//Get data in info

console.log("My name is: ", myInformation.myName);

//Add data

myInformation.myCountry = "Viet Nam";
myInformation.myFavoriteNumber = 6;
console.log("Update my information: ", myInformation);

//Delete data

delete myInformation.myFavoriteNumber;

console.log("Delete my information: ", myInformation);
