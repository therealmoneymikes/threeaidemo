import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "./BasketSlice"
import signupProgressReducer from "./signupProgressSlice"


export const store = configureStore({
    reducer: {
        basket: basketReducer,  
        signupProgress: signupProgressReducer
    }
})  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch