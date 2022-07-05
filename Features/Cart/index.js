import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/product";
import { DB_URL } from "../../Constants/Firebase";


const initialState={
value:{
    cart:[],
    response:{},
    loading:false,
    error:false,
    
}
}


export const confirmPurchase=createAsyncThunk(
    'cart/confirm',
     async ({items,userId,total}, asyncThunk)=>{
        try{
            const res=await fetch(
                `${DB_URL}orders.json`,
                {
                    method:'POST',
                    body:JSON.stringify({
                        date:new Date().toLocaleDateString(),
                        items:items,
                        id:Math.floor(Math.random()*1000000),
                        items:items,
                        total:total,
                        userId:userId
                    })
                }
            )
            const data=res.json();
            return data;
        } catch (error){
            return rejectWithValue('Ops there seems to be an error')
        }
     }
)


const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addItem:(state,action)=>{
            const productRepeat=state.value.cart.find(product=>product.id===action.payload.id)
            if(productRepeat){
                state.value.cart.map(item=>{
                    if(item.id===action.payload.id) item.quantity++
                    return item
                })
            }
            else{
                const product=PRODUCTS.find(product=>product.id===action.payload.id)
                state.value.cart.push({...product,quantity:1})
            }
        },
        removeItem:(state, action)=>{
            
            const newCart=state.value.cart.filter(product=>product.id!==action.payload.id)
            state.value.cart=newCart
           
        },
        removeCart:(state)=>{
            state.value.cart=[]
        }
        
    },
    extraReducers:{
        [confirmPurchase.pending]:(state)=>{
            state.value.loading=true
        },
        [confirmPurchase.fulfilled]:(state,{payload})=>{ const saveOrders = Object.entries(payload).map((item) => {
            return {
              id: item[0],
              ...item[1],
            };
          });
          state.value.response = saveOrders;
          
           
            state.value.loading=false
        },
        [confirmPurchase.rejected]:(state)=>{
            state.value.loading=false
            state.value.error=true
        }
    }
})

export const {addItem,removeItem,removeCart}=cartSlice.actions
export default cartSlice.reducer