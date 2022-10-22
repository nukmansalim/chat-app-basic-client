import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./slices/AuthSlice";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";
const persistConfig = {
   key: "auth",
   storage
}

export const store = configureStore({
   reducer: {
      auth: persistReducer(persistConfig, authReducer)
   }
})

export const SelectUser = () => {
   const user = useSelector(state => state.auth.user)

   return user
}

export const persistor = persistStore(store)

