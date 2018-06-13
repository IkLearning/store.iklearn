import { combineReducers } from 'redux'
import { productReducers } from './product'
// import { cartReducers } from './cart'

export default combineReducers({
    // cart: cartReducers,
    products: productReducers
})