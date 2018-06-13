import ProductService from '../api/product'
import * as types from '../constants/ActionTypes'
import { createAction } from 'redux-actions'

export const fetchProducts = createAction(types.FETCH_PRODUCTS, ProductService.getProducts)
export const fetchProductsByCategory = createAction(types.FETCH_PRODUCTS_BY_CATEGORY, ProductService.getProductsByCategory)