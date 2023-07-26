import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open:false,
    type:null
  },
  reducers: {
    openModal: (state, action) => {
      console.log("open")
      state.open=true
      state.type=action.payload
    },
    closeModal: (state, action) => {
      state.open=false
      state.type=null
      },
  },
})
export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer