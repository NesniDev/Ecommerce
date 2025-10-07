/**
 * this fiucntion calculete sum total
 * @param {Array} cartProducts cartProducts: Array of objects
 * @returns {Number} total price
 */

export const totalPrice = (cartProducts) => {
  return cartProducts.reduce((total, product) => total + product.price, 0)
}
