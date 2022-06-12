import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoaded: false,
    todos: [],
    isValid: false,
    isSpiner: true
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state, action){
            const newTask ={
                id: Math.random().toString(),
                firstName: action.payload.test,
                pass: action.payload.pass

            }
            state.todos.push(newTask)
        },
        valid(state){
            state.isLoaded = true
        },
        noValid(state){
            state.isLoaded = false
        },
        isValid(state){
            state.isValid =true
        },
        noIsValid(state){
            state.isValid = false
        },
        spiner(state){
            state.isSpiner = false
        },
        noSpiner(state){
            state.isSpiner = true
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice