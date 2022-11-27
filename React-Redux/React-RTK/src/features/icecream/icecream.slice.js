// const { createSlice } = require('@reduxjs/toolkit')
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  noOfIceCream : 10
}

const iceCreamSlice= createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    orderIC(state) {
      state.noOfIceCream--;
    },
    restockIC(state, action) {
      state.noOfIceCream += action.payload
    }
  }
})

export default iceCreamSlice.reducer
export const { restockIC, orderIC } = iceCreamSlice.actions