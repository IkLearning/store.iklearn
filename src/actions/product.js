import ProductService from '../api/product'
import * as types from '../constants/ActionTypes'

const fetchProducts = () => {
    let response = ProductService.getProducts()
    console.log(response)
}

export default {
    fetchProducts
}
