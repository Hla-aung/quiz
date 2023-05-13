import { createSlice } from "@reduxjs/toolkit"

const resultReducer = createSlice({
    name: "results",
    initialState: {
        result: [],
        correct: [],
        userID: null,
        questions: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.userID = action.payload  
        },
        setQuestions: (state, action) => {
            return{
                ...state,
                questions: action.payload
            }
        },
        pushResult: (state, action) => {
            state = state.result.push(action.payload)
        },
        pushCorrect: (state, action) => {
            state = state.correct.push(action.payload)
        },
        reset: (state) => {
            state.result = [],
            state.correct = [],
            state.userID = null
        }
    }
})

export const {setQuestions, setUser, pushResult, pushCorrect, reset} = resultReducer.actions;
export default resultReducer.reducer