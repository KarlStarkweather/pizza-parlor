# Pizza Parlor

## By Karl Starkweather
This webpage simulates ordering a pizza

## Technologies used:
* HTML
* CSS
* Javascript

## Setup Instructions
Clone directory from repository at https://github.com/KarlStarkweather/pizza-parlor
open index.html in any browser

## known bugs:
None

## License:
Copyright (c) Karl Starkweather November 7, 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Specs

Describe: Pizza constructor

Test: "It should include properties for size, crust and toppings"
Code: 
  let pizza1 = new Pizza(small,"Thin Crust")
  pizza1.toppings = [cheese,mushrooms,olives]
Expected Output: all propeties of the pizza object should be visible from the console

Test: "It should include a method which displays the order"
Code: 
  pizza1.showOrder()
Expected Output:
  Your Pizza Order:
  
  size: Small           $6.99
  crust: Thin Crust
  Toppings:
    Cheese
    Mushrooms           $3.00
    Olives              $3.00
  
  Total:                $12.99
