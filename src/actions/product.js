import ProductService from '../api/product'
import * as types from '../constants/ActionTypes'


const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = async () => dispatch => {
    let response = await ProductService.getProducts
    if(response.status === 200 && response.statusText === 'OK')
        dispatch(receiveProducts(response.data.items))
}

const addToCartUnsafe  = product => ({
    type: types.ADD_TO_CART,
    product
})

export const addToCart = product => dispatch => {
    dispatch(addToCartUnsafe(product))
}

export const checkout = products => dispatch => {
    let response = await ProductService.getCheckout
    if(response.status === 200 && response.statusText === 'OK')
        if(response.data.status === 'OK')
            dispatch({
                type: types.CHECKOUT_SUCCESS,
                cart
            })
        else
            dispatch({
                type: types.CHECKOUT_FAILURE,
                cart
            })
    else
        dispatch({
            type: types.CHECKOUT_FAILURE,
            cart
        })
}
