// import {
//     ADD_TO_CART,
//     CHECK_OUT,
//     CHECKOUT_SUCCESS,
//     CHECKOUT_FAILURE
// }

// from '../constants/ActionTypes'

// const initialState = {
//     items: [],
//     quantity: 0,
//     price: 0
// }

// const items = (state = initialState.items, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return [...state, action.product]
//         default:
//             return state
//     }
// }

// const quantity = (state = initialState.quantity, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//           return {...state + 1}    
//         default:
//           return state
//       }
// }

// const price = (state = initialState.price, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             let product = action.product
//             return {...state + product.price}    
//         default:
//             return state
//       }
// }

// export const getItems = state => state.items

// export const getQuantity = state => state.quantity

// export const getPrice = state => state.price

// const cart = (state = initialState, action) => {
//     switch (action.type) {
//         case CHECK_OUT:
//             return initialState
//         case CHECKOUT_FAILURE:
//             return action.cart
//         default:
//             return {
//                 items: items(state.items, action),
//                 quantity: quantity(state.quantity, action),
//                 price: price(state.price, action)
//             }
//     }
// }

// export default cart