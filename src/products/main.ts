import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 8
});
addProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 7,
  size: 'XL'
});
console.log(products)
const total = calcStock();
console.log(total);
