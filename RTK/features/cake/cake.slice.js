const createSlice = require('@reduxjs/toolkit').createSlice

initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--; // direct mutation !? Under the hood it uses immer library...so no need to worry about it, unlike before we had to spread all nested object or had to use immer.
    },
    restocked(state, action) {
      state.numOfCakes += action.payload.quantity;
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions