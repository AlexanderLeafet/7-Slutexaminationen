import productReducer from "./reducers/productSlice";
import cartCounterReducer from "./reducers/cartCounterSlice";

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore(
    {
        reducer: {
            products: productReducer,
            cartCounter: cartCounterReducer
        }
    }
  );