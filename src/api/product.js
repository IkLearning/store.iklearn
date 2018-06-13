import axios from 'axios'

const getProducts = async () => {
   return await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/products`)
}

const getProductsByCategory = async category => {
    return await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/products/category/${category}`)
}

const getCheckout = async () => {
    return await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/checkout`)
}

export default { 
    getProducts,
    getProductsByCategory,
    getCheckout
}