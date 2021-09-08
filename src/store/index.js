import {
  createStore
} from 'vuex'

import router from '@/router'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.cart
    }
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state,product) {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        state.cart = state.cart.filter(i => i.id !== product.id)
      }
      console.log(this.getters.cartItems)
      if(!this.getters.cartItems.length){
        updateLocalStorage(state.cart)
        router.push('/');
      }else{
        updateLocalStorage(state.cart)
      }
    },
    decreaseFromCart(state,product) {
      const item = state.cart.find(i => i.id === product.id)
      if (item) {
        if(item.quantity > 1){
          item.quantity--
        }
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {},
  modules: {}
})