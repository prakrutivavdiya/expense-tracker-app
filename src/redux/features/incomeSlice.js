import { createSlice } from '@reduxjs/toolkit'

export const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementIncomeByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementIncomeByAmount: (state, action) => {
        state.value += action.payload
      },
      setIncome: (state, action) => {
        state.value = action.payload
      },
  },
})
export const { incrementIncomeByAmount, decrementIncomeByAmount, setIncome } = incomeSlice.actions

export default incomeSlice.reducer