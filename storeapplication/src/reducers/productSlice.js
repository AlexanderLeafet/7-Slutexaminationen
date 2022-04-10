import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: []
}
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: function (state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += 1;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: function (state, action) {
      const nextCartItems = state.products.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.products = nextCartItems;
      //state.slice((product) => product.id === action.payload.id)
    },
    incrementProductQuantity: function (state, action) {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (selectedProduct) {
        selectedProduct.quantity = selectedProduct.quantity + 1;
      }
    },
    decrementProductQuantity: function (state, action) {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (selectedProduct) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = productSlice.actions;
export default productSlice.reducer;
