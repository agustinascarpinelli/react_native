import { createSlice } from "@reduxjs/toolkit";
import { ActionSheetIOS } from "react-native";
import { CATEGORIES } from "../../Data/categories";

const initialState={
    value:{
        categories: CATEGORIES,
        categorySelected:"",
    }
}

export const categoriesSlice=createSlice({
    name:"categories",
    initialState:initialState,
    reducers:{
        setCategorySelected:(state,action)=>{
            const categorySelected=state.value.categories.find(category=>category.id===action.payload)
            state.value.categorySelected=categorySelected.category
        }
    }
})

export const {setCategorySelected}=categoriesSlice.actions
export default categoriesSlice.reducer