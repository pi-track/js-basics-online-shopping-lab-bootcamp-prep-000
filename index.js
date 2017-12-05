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
  else if (cart.length===1) {
    var key = Object.keys(cart[0])
    var value = cart[0][key]
    console.log(`In your cart, you have ${key} at $${cart[0]}.`
}`)
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
