function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType= sauceType;
  pizza.cheeses= cheeses;
  pizza.toppings= toppings;
  return pizza;
  }
  var piz1 = pizzaOven ("deep dish", "traditional", "mozzarella", ["pepporoni", "sausage"]);
  console.log (piz1);
  var piz2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
  console.log (piz2);