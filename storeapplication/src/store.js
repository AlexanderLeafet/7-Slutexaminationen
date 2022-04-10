import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./reducers/productSlice";
import cartCounterReducer from "./reducers/cartCounterSlice";

export const store = configureStore(
    {
        reducer: {
            products: productReducer,
            cartCounter: cartCounterReducer
        }
    }
  );