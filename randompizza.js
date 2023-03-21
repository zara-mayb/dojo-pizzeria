function randomPizza () {
  var crustType = ["deep-dish", "thin", "hand-tossed"];
  var sauceType = ["marinara", "alfredo", "bbq"];
  var cheeses = ["mozzarella", "feta", "cheddar"];
  var toppings = ["onions", "peppers", "ham", "pinapples"];
  var pizza = {
    crustType: crustType [Math.floor (Math.random()* crustType.length)],
    sauceType: sauceType [Math.floor (Math.random()* sauceType.length)],
    cheeses: cheeses [Math.floor(Math.random()* cheeses.length)],
    toppings: toppings [Math.floor(Math.random()* toppings.length)],
  }
  return pizza
}
console.log (randomPizza());