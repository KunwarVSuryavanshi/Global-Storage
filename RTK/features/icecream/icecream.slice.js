const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  noOfIceCream : 10
}

const iceCream = createSlice({
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

module.exports = iceCream.reducer
module.exports.iceCreamActions = iceCream.actions