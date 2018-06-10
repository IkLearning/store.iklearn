import axios from 'axios'

export default {
    getProducts: axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/products`),
    getProductsByCategory: axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/products/category/5b0351cb2b8ccf1d04dd82c6`),
    getCheckout: axiois.get(`${process.env.REACT_APP_DOMAIN_NAME}/checkout`)
}