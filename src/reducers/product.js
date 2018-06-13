import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from '../actions/index'

const initialState = {
    products: [],
    isLoaded: false
}

export const productReducers = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload.data.items],
                isLoaded: true
            }
        case FETCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: [action.payload.data.items],
                isLoaded: true
            }
        default:
            return state
    }
}
