import { createSlice } from '@reduxjs/toolkit'

export const transectionSlice = createSlice({
  name: 'transection',
  initialState: {
    value: [],
  },
  reducers: {
    addTransection: (state, action) => {
      state.value = [...state.value,action.payload]
    },
    setTransections: (state, action) => {
        state.value = [...action.payload]
      },
    removeTransection: (state, action) => {
        console.log(action.payload)
        //state.value = [...state.value].filter(ob=>ob==action.payload)
      },
  },
})
export const { addTransection, setTransections, removeTransection } = transectionSlice.actions

export default transectionSlice.reducer