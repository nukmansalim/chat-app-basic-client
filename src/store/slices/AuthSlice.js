import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null
}

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      register: (state, action) => { state.user = action.payload },
      login: (state, action) => { state.user = action.payload },
      logout: () => initialState
   }
})


export const { register, login, logout } = authSlice.actions

export default authSlice.reducer