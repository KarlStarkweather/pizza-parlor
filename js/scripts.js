// Business Logic
function Pizza(size,crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = {};
}

// options for size
let small = {name: "Small", price: 6.99};
let medium = {name: "Medium", price: 9.99};
let large = {name: "Large", price: 12.99};

// options for toppings
let cheese = {name: "Cheese"};
let mushrooms = {name: "Mushrooms", price: 3.00};
let olives = {name: "Olives", price: 3.00};
let pepperoni = {name: "Pepperoni", price: 3.00};
let sausage = {name: "Sausage", price: 3.00};

let pizza1 = new Pizza(small,"Thin Crust");
pizza1.toppings = [cheese,mushrooms,olives];

