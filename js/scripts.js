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

let pizza1 = new Pizza(small,"Pan Crust");
pizza1.toppings = [cheese,mushrooms,olives];


// UI Logic

function toUSD(number) {
  return (number).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });  
}

$(document).ready(function() {
  $("#show-order").click(function() {
    $("#total").show();
    $("#main-description").text(pizza1.size.name + " " + pizza1.crust);
    $("#main-price").text(toUSD(pizza1.size.price));
    let total = pizza1.size.price;
    pizza1.toppings.forEach(function(item,index) {
      $("#top" + index).text(item.name);  
      if(item.hasOwnProperty("price")) {
        $("#top" + index + "-price").text(toUSD(item.price));
        total += item.price;
      }
    });
    $("#total-price").text(toUSD(total));
  }) 
})
