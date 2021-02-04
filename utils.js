// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  if (w >= 0 && h >= 0) {
    return w * h
  } else {
    return null
  }
}

const perimeter = (w, h) => {
  if (w >= 0 && h >= 0) {
    return 2 * w + 2 * h
  } else {
    return null
  }
}

const circleArea = r => {
  if (r >= 0) {
    return Math.PI * r
  } else {
    return null
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  for (cartItem of shoppingCart) {
    if (cartItem.name === item.name) {
      cartItem.quantity += item.quantity
      return
    }
  }
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  let total = 0
  for (item of shoppingCart) {
    total += item.quantity
  }
  return total
}

const removeItemFromCart = (item) => {
  for (cartItem of shoppingCart) {
    if (cartItem.name === item.name) {
      shoppingCart.pop(cartItem)
      return
    }
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
