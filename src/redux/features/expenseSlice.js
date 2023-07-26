import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementExpenseByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementExpenseByAmount: (state, action) => {
        state.value += action.payload
      },
    setExpense: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { incrementExpenseByAmount, decrementExpenseByAmount, setExpense } = expenseSlice.actions

export default expenseSlice.reducer