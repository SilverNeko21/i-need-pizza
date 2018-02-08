/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order11821 = {
  Info1: {
    customerName: "James Franko",
    Address: "2155 E Lake Dr",
    City: "Seattle",
    State: "WA",
    zipCode: "11310"
  },
  Pizza: {
    Crust: "thin",
    Sauce: "robust marinara",
    Cheese: "regular"
  },
  Toppings: {
    Veggies: ["olives", "green peppers"],
    Meats: ["pepperoni", "ham", "sausage"],
  },
    sideItems: "breadsticks", "bbq wings 6 piece",
    Sauces: "ranch",
    specialInstructions: "please cut into squares",
    paymentType: "cash",
    storeId: "112"
};

var order11372 = {
  Info2: {
    customerName: "Justin Bieber",
    Address: "1801 W Rodeo Dr",
    City: "Beverly Hills",
    State: "CA",
    zipCode: "91833"
  }
  Pizza{
    Crust: "stuffed crust",
    Sauce: "creamy garlic alfredo",
    Cheese: "double"
  }
  Toppings{
    Veggies: "onion", "anchovies", "mushrooms",
    Meats: "chicken", "bacon"
  }   
  Side Items: "double fudge brownie dessert",
  Sauces: "bbq", "garlic sauce",
  Special Instructions: "call 815 at the gate",
  Payment Type: "credit card",
  Store Id: "382"
}
/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
var currentOrders = {
  order11821 { 
    Info1 {
      Customer Name: "James Franko",
      Address: "2155 E Lake Dr",
      City: "Seattle",
      State: "WA",
      Zip Code: "11310"
    }
    Pizza {
      Crust: "thin",
      Sauce: "robust marinara",
      Cheese: "regular"
    }
    Toppings {
      Veggies: "olives", "green peppers",
      Meats: "pepperoni", "ham", "sausage",
    }
  Side Items: "breadsticks", "bbq wings 6 piece",
  Sauces: "ranch",
  Special Instructions: "please cut into squares",
  Payment Type: "cash",
  Store Id: "112",
  }
  order11372  {
    Info2{
      Customer Name: "Justin Bieber",
      Address: "1801 W Rodeo Dr",
      City: "Beverly Hills",
      State: "CA",
      Zip Code: "91833"
    }
    Pizza{
      Crust: "stuffed crust",
      Sauce: "creamy garlic alfredo",
      Cheese: "double"
    }
    Toppings{
      Veggies: "onion", "anchovies", "mushrooms",
      Meats: "chicken", "bacon"
    }   
    Side Items: "double fudge brownie dessert",
    Sauces: "bbq", "garlic sauce",
    Special Instructions: "call 815 at the gate",
    Payment Type: "credit card",
    Store Id: "382"
    }
}

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/

