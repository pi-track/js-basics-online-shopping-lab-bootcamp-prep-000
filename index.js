var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myObject = new Object()
  myObject[item] = Math.ceil(100*Math.random())
  cart.push(myObject)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length === 1) {
    var key = Object.keys(cart[0])
    var value = cart[0][key]
    console.log(`In your cart, you have ${key} at $${value}.`)
    return
  }
  else if (cart.length === 2) {
    var key1 = Object.keys(cart[0])
    var value1 = cart[0][key1]
    var key2 = Object.keys(cart[1])
    var value2 = cart[1][key2]
    console.log(`In your cart, you have ${key1} at $${value1} and ${key2} at $${value2}.`)
    return
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
