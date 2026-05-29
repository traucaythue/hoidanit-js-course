console.log("lab 03");

// Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
// có các thuộc tính:

// name (tên sản phẩm)

// price (giá sản phẩm)

// inStock (true/false – còn hàng hay không)
// Ví dụ:
// {
// name: "T-shirt",
// price: 200,
// inStock: true
// }
// Hãy thực hiện:

const product1 = {
  name: "T-Shirt",
  price: 200,
  inStock: true,
};

const product2 = {
  name: "Shirt",
  price: 100,
  inStock: false,
};

const product3 = {
  name: "Jeans",
  price: 350,
  inStock: true,
};

const product4 = {
  name: "Jogger",
  price: 300,
  inStock: false,
};

const product5 = {
  name: "Shoes",
  price: 210,
  inStock: false,
};

const products = [product1, product2, product3, product4, product5];
console.log(products);

// 1. In ra tên của sản phẩm đầu tiên.
console.log("Name of first-product: ", product1.name);

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
product2.price = 150;

console.log(products);

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm

products.push({
  name: "Hat",
  price: 90,
  inStock: true,
});
console.log(products);

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();
console.log(products);

// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
products.forEach((element) => {
  console.log("Name of all products: ", element.name);
});

// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
const priceOfProducts = products.map((element, index) => {
  return element.price;
});
console.log(priceOfProducts);

// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).

const isAvailable = products.filter((value, index) => {
  return value.inStock === true;
});

console.log(isAvailable);

// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.

for (let key in product1) {
  console.log(">>> check key:", key, product1[key]);
}
