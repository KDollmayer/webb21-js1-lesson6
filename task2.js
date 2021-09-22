class Customer {
  constructor() {
    this.transactions = [];
    this.discountThreshold = 1000;
  }
  addTransaction(amount) {
    this.transactions.push(amount);
  }
  getTotaltSpent() {
    let sum = 0;
    this.transactions.forEach((transaction) => {
      sum += transaction;
    });
    return sum;
  }
  isEligableForDiscount() {
    return this.getTotaltSpent() >= this.discountThreshold;
  }
}

const customer1 = new Customer();
customer1.addTransaction(10);
customer1.addTransaction(100);
customer1.addTransaction(50);
customer1.addTransaction(10);
console.log(customer1.isEligableForDiscount());

console.log(customer1.getTotaltSpent());
console.log(customer1.isEligableForDiscount());
