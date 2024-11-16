import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => {
            console.log(action.payload)
            // { id: xxxxxx, title: "xxxxxxx", status: "xxxxxxx", createdAt: "xxxxx", updatedAt: "xxxxx" }
            state.todoList = [action.payload, ...state.todoList]
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.taskId)
        }
    }
})

export const { addToList, removeTodo } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice