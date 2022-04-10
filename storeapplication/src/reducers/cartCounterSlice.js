import {createSlice} from "@reduxjs/toolkit";

export const cartCounterSlice = createSlice({
name: "cartCounter",
initialState : {
    value: 0
},
reducers: {
    incrementCartCounter : function(state){
        state.value += 1
    }, 
    decrementCartCounter : function(state){
        state.value -= 1
    }
}
});

export const {incrementCartCounter} = cartCounterSlice.actions;
export const {decrementCartCounter} = cartCounterSlice.actions;
export default cartCounterSlice.reducer;