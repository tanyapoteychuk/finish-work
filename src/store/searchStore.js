import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearch=createAsyncThunk(
   'search/fetchSearch',
   async (value)=>{
      const response=await fetch(`https://dummyjson.com/products/search?q=${value}`)
      const json=await response.json();
      return json.products;
   }
)

export const searchSlice=createSlice({
name:'search',
initialState:{
   items:[],
   status:'idle',

},
reducers:{
   clearSearchProducts:(state)=>{
      state.items=[]
   }
},

extraReducers(builder) {
   builder
   .addCase(fetchSearch.pending, (state, action) => {
     state.status='loading'
    })
  .addCase(fetchSearch.fulfilled, (state, action) => {
     state.status='suceeded'
     state.items=action.payload
   })
   .addCase(fetchSearch.rejected, (state, action) => {
     state.status='failed'
    })

 },
});



export default searchSlice.reducer
export const selectSearch=state=>state.search.items;
export const { clearSearchProducts } = searchSlice.actions;
