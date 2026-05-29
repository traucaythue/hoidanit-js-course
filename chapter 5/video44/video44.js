console.log("video 44");

const sinhVien1 = {
  userName: "Khanh",
  scores: 10,
};

const sinhVien2 = {
  userName: "Lam",
  scores: 8,
};

const sinhVien3 = {
  userName: "Tung",
  scores: 5,
};

const sinhVien = [sinhVien1, sinhVien2, sinhVien3];
console.log(">>> check sinh vien:", sinhVien);

//In tên sinh viên

// sinhVien.forEach((element, index) => {
//   console.log("sinh vien: ", element.userName);
// });

//for...in
const person = {
  email: "blablabla@gmail.com",
  age: 23,
  address: "vietnam",
};

// for (let key in person) {
//   console.log(key, person[key]);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
