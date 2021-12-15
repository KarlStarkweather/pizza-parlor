// Utility Logic

function toUSD(number) {
  return (number).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });  
}

// Business Logic
function Pizza(size,crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [{}];
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
let toppingOptions = [
  ["Cheese",0],
  ["Mushrooms",3],
  ["Olives",3],
  ["Pepperoni",3],
  ["Sausage",3]
];

function Topping(name,price) {
  this.name = name;
  this.price = price;
};


// UI Logic

$(document).ready(function() {
  $("#show-order").click(function() {
    const sizeVal = $("#size-select").val();
    const selectedSize = new Size(sizeOptions[sizeVal][0],sizeOptions[sizeVal][1]);
    const selectedCrust = $("#crust-select").val();
    let order = new Pizza(selectedSize, selectedCrust);
    $("#result").show();
    $("#main-description").text(order.size.name + " " + order.crust);
    $("#main-price").text(toUSD(order.size.price));
    let total = order.size.price;
    let tblToppings = document.getElementById("selectToppings");
    let chks = tblToppings.getElementsByTagName("INPUT");
    
    for (let index = 0; index < chks.length; index++) {
      if (chks[index].checked) {
        let top = new Topping(toppingOptions[index][0],toppingOptions[index][1]);
        order.toppings.push(top);
      };
    };
        
    order.toppings.forEach(function(item,index) {
      $("#top" + index).text(item.name);  
      if(item.price>0) {
        $("#top" + index + "-price").text(toUSD(item.price));
        total += item.price;
      }
    });
    $("#total-price").text(toUSD(total));
  }) 
})
