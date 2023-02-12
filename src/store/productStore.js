import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts=createAsyncThunk(
   'products/fetchProducts',
   async ()=>{
      const response=await fetch('https://dummyjson.com/products?limit=100')
      const json=await response.json();
      return json.products;
   }
)

export const productSlice=createSlice({
name:'products',
initialState:{
   items:[],
   status:'idle',

},
reducers:{
},

extraReducers(builder) {
   builder
   .addCase(fetchProducts.pending, (state, action) => {
     state.status='loading'
    })
  .addCase(fetchProducts.fulfilled, (state, action) => {
     state.status='suceeded'
     state.items=action.payload
   })
   .addCase(fetchProducts.rejected, (state, action) => {
     state.status='failed'
    })

 },
});



export default productSlice.reducer
export const selectProducts=state=>state.products.items;
export const productsStatus=state=>state.products.status;
