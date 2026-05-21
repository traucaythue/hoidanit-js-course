console.log("video 39");

//Khai báo mảng sinh viên
const myClass = ["Duy", "Mai Anh", "Nam", "Tuấn", "Yến"];
console.log(myClass);

//Sử dụng vòng lặp for để in tên và index
for (let i = 0; i < myClass.length; i++) {
  console.log("Index " + i + " Sinh viên :" + myClass[i]);
}

console.log("---------------");

//Sử dụng forEach

myClass.forEach(function (value, index) {
  console.log("Sinh viên " + value + " vị trí thứ " + index);
});

console.log("=============");

//Arrow function
myClass.forEach((value, index) => {
  console.log("Index " + index + " Sinh viên:" + value);
});
