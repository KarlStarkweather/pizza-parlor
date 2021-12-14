// Business Logic
function Pizza(size,crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = {};
};

let sizeOptions = [
  ["Large",12.99],
  ["Medium",9.99],
  ["Small",6.99]
];

function Size(name,price) {
  this.name = name;
  this.price = price;
};

// options for toppings
let cheese = {name: "Cheese"};
let mushrooms = {name: "Mushrooms", price: 3.00};
let olives = {name: "Olives", price: 3.00};
let pepperoni = {name: "Pepperoni", price: 3.00};
let sausage = {name: "Sausage", price: 3.00};


// UI Logic

function toUSD(number) {
  return (number).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });  
}

$(document).ready(function() {
  $("#show-order").click(function() {
    const sizeVal = $("#size-select").val();
    const selectedSize = new Size(sizeOptions[sizeVal][0],sizeOptions[sizeVal][1]);
    const selectedCrust = $("#crust-select").val();
    console.log(selectedCrust);
    let order = new Pizza(selectedSize, selectedCrust);
    $("#total").show();
    $("#main-description").text(order.size.name + " " + order.crust);
    $("#main-price").text(toUSD(order.size.price));
    let total = order.size.price;
    order.toppings = [cheese,mushrooms,olives];
    order.toppings.forEach(function(item,index) {
      $("#top" + index).text(item.name);  
      if(item.hasOwnProperty("price")) {
        $("#top" + index + "-price").text(toUSD(item.price));
        total += item.price;
      }
    });
    $("#total-price").text(toUSD(total));
  }) 
})
