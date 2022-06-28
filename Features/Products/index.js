import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/product";

const initialState={
    value:{
        products:PRODUCTS,
        productsByCategory:[],
        productSelected:{},
    }
}

export const productSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        setProductsByCategory:(state,action)=>{
            const productsFiltered=state.value.products.filter(product=>product.category===action.payload)
            state.value.productsByCategory=productsFiltered;
        },

        setProductSelected:(state, action)=>{
            const productSelected=state.value.productsByCategory.find(product=>product.id===action.payload)
            state.value.productSelected=productSelected
        }
    }
})

export const {setProductSelected,setProductsByCategory}=productSlice.actions

export default productSlice.reducer