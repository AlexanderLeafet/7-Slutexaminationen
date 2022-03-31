// Actions - Bestämmer vad som ska uppdateras i vårt state
export const increment = (count) => {
    return{
        type: 'Increment',
        payload: count
    }
}

export const decrement = (count) => {
    return{
        type: 'Decrement',
        payload: count
    }
}