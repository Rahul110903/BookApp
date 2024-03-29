import { configureStore } from "@reduxjs/toolkit";
import BookSliceReducer from "./BookSlice";
import CartSliceReducer from "./CartSlice";
import OrderSliceReducer from "./OrderSlice";

export const BookStore=configureStore({
    reducer:{
        Books:BookSliceReducer,
        cart:CartSliceReducer,
        order:OrderSliceReducer
    }
})