import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from './features/balanceSlice'
import incomeReducer from './features/incomeSlice'
import expenseReducer from './features/expenseSlice'
import modalReducer from './features/modalSlice'
import transectionReducer from './features/transectionSlice'

export default configureStore({
  reducer: {
    balance:balanceReducer,
    income:incomeReducer,
    expense:expenseReducer,
    modal:modalReducer,
    transection:transectionReducer,
  },
})