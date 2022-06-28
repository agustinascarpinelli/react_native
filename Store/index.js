import {configureStore} from '@reduxjs/toolkit'
import productsReducer from '../Features/Products'
import categoriesReducer from '../Features/Categories'
import cartReducer from '../Features/Cart'
import orderReducer from '../Features/Orders'
import authReducer from '../Features/Auth'
import locationsReducer from '../Features/Locations'

const store= configureStore({
    reducer:{
        categories:categoriesReducer,
        products: productsReducer,
        cart:cartReducer,
        orders:orderReducer,
        auth:authReducer,
        locations:locationsReducer,
    }
})
export default store