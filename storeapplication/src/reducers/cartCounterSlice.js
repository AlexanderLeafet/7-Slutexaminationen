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
    },
    resetCartCounter : function(state){
        state.value = 0
    }
}
});

export const {incrementCartCounter, decrementCartCounter, resetCartCounter} = cartCounterSlice.actions;
export default cartCounterSlice.reducer;