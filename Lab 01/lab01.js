console.log("video 23");


const fullName = "Luong Thanh Tung";
const birthYear = 1993;
let isStudent = false;

const today = new Date();
const currenYear = today.getFullYear();

let calculatedAge = currenYear - birthYear;

console.log(`
    Tên: ${fullName}
    Tuổi: ${calculatedAge}
    Sinh viên: ${isStudent}
    `)