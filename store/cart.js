
export const state = () => ({
  cartItems: []
})

export const mutations = {
  add (state, payload) {
    const { id, item, quantity } = payload
    console.log('trigger', id, item, quantity)
    let isExist = false
    state.cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        isExist = true
        return Object.assign({}, cartItem, { quantity: cartItem.quantity + quantity })
      } else {
        return cartItem
      }
    })
    if (!isExist) {
      state.cartItems.push({
        id,
        item,
        quantity
      })
    }
  },
  set (state, payload) {
    const { id, quantity } = payload
    state.cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return Object.assign({}, cartItem, { quantity })
      } else {
        return cartItem
      }
    })
  },
  remove (state, payload) {
    const { id, quantity } = payload

    state.cartItems = state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        if ((cartItem.quantity - quantity) > 0) {
          return Object.assign({}, cartItem, { quantity: cartItem.quantity - quantity })
        }
      } else {
        return cartItem
      }
    })
  },
  removeAll (state, payload) {
    const { id } = payload

    let cartItemDelete
    state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        cartItemDelete = cartItem
      }
    })
    state.cartItems.splice(state.cartItems.indexOf(cartItemDelete), 1)
  }
}
