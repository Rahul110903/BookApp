import { configureStore } from "@reduxjs/toolkit";
import BookSliceReducer from "./BookSlice";
import CartSliceReducer from "./CartSlice";

export const BookStore=configureStore({
    reducer:{
        Books:BookSliceReducer,
        cart:CartSliceReducer
    }
})