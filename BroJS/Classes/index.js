// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function ex-static keyword, encapsulation inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  claculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}
const salesTax = 0.05;

const product1 = new Product("shirt", 19.56);
product1.displayProduct();

const total = product1.claculateTotal(salesTax);
console.log(`Total price (with tax) $${total.toFixed(2)}`);
