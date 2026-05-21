console.log("video 38");

const names = ["tung", "eric", "hoidanit", "nam"];

//index = 0 ; array[index]

console.log("0 =", names[0]);

console.log("1 =", names[1]);

//truy cap phan tu khong ton tai
console.log("10 =", names[10]);

names[2] = "updatename";

console.log("before:", names);

//3. Them ,xoa phan tu trong mang
// Them

names.push("boy", 58); //Them vao cuoi mang
names.unshift(null); //Them vao dau mang
console.log("after:", names);

// Xoa

names.shift(); //Xoa o dau mang
console.log(names);

names.pop(); //Xoa o cuoi mang

console.log(names);
