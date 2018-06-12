import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './product'

export default combineReducers({
    cart,
    products
})

const getItems = state => fromCart.getItems(state.cart)
const getQuantity = state => fromCart.getQuantity(state.cart)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)


