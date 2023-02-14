import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser=createAsyncThunk(
   'user/fetchUser',
   async ({userName,password,email})=>{
   const res=await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: userName,
        password,
        email,
      })
    })
   const json= await res.json();
   return json;
   }
)     
   

export const userSlice=createSlice({
name:'user',
initialState:{
   users:[],
   userActive:{},
},
reducers:{
   authUser:(state,action)=>{
      if(state.users.some(user=>user.firstName===action.payload.userName && user.password===action.payload.password)){
        state.userActive=action.payload
      } 
      },

},

extraReducers(builder) {
   builder
   .addCase(fetchUser.pending, (state, action) => {
     state.status='loading'
    })
  .addCase(fetchUser.fulfilled, (state, action) => {
     state.status='suceeded'
     state.users=[...state.users,action.payload]
     state.userActive=action.payload
   })
   .addCase(fetchUser.rejected, (state, action) => {
     state.status='failed'
    })

 }
});



export default userSlice.reducer;
export const selectUser=state=>state.user.users;
export const { authUser } = userSlice.actions;
