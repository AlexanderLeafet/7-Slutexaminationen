import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
name: "products",
initialState : [],
reducers: {
    addProduct : function(state, action){
        state.push(action.payload)
    }
}
});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;