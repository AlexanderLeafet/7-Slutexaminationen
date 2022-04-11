const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch(action.type){
        case "Increment":
            return{
                ...state,
                counter: state.counter + action.payload
            }
            case "Decrement":
                return{
                    ...state,
                    counter: state.counter - action.payload
                }
                default:
                    return state;
    }
}

export default CounterReducer;