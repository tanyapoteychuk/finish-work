import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productStore'
import cartReducer from './cartStore'
import  searchReducer  from './searchStore'

export default configureStore({
  reducer: {
   products: productReducer,
   cart:cartReducer,
   search:searchReducer,
  
  }
})