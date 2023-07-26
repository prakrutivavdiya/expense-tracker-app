import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementBalanceByAmount: (state, action) => {
      state.value += action.payload
    },
    setBalance: (state, action) => {
      state.value = action.payload
    },
    decrementBalanceByAmount: (state, action) => {
        state.value += action.payload
      },
  },
})
export const { incrementBalanceByAmount, decrementBalanceByAmount, setBalance } = balanceSlice.actions

export default balanceSlice.reducer