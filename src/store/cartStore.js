import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
   name:"cart",
   initialState:{
     data:[],
   },
   reducers:{
      addedProductInCart:(state,action)=>{
      if(state.data.some(item=>item.id===action.payload.id)){
         alert('Товар уже добавлен в корзину')
      } else{
      state.data.push(action.payload)
      }  
      },
      increment:(state,action)=>{
      state.data.some(item=>{
         if(item.id==action.payload.id){
         item.count++
         }
        })
      },
      decrement:(state,action)=>{
         state.data.some(item=>{
         if(item.id==action.payload.id){
         item.count--
         }}
         )
         const items=state.data.filter(item=>item.count>0 )
         state.data=items
      },
      changeCheckbox:(state,action)=>{
       state.data.some(item=>{
         if(item.id==action.payload){
            item.checked=!item.checked
         }
       })
      },
      changeAllcheckbox:(state,action)=>{
         if(action.payload==true){
            state.data.map(item=>
            item.checked=false)
         }else{
            state.data.map(item=>
            item.checked=true)
         }
      },
      deleteProduct:(state,action)=>{
         const items = state.data.filter(item=>item.id !== action.payload)
         state.data = items
         
      }
   },
   
  
})

export default cartSlice.reducer;
export const selectCartProducts=state=>state.cart.data;
export const { addedProductInCart,increment,decrement,changeCheckbox,changeAllcheckbox,deleteProduct } = cartSlice.actions;
