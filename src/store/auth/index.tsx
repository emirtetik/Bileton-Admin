import { createSlice } from "@reduxjs/toolkit";

const initialState={
    account:{
    id:1,
    fullname: 'neya@hotmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/1711840191399256064/JTjHdd64_normal.jpg'
  },
  isLoggedIn: false
 
}

 const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
       _addAccount:(state,action) => {
         state.account = action.payload
       },
       _setLoginStatus:(state, action) => {
        state.isLoggedIn  = action.payload
      },
    }

})

export const {_addAccount,_setLoginStatus} = auth.actions
export default auth.reducer