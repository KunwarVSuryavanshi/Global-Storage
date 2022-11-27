const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cake.slice')
const iceCreamReducer = require('../features/icecream/icecream.slice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer
  }
})

module.exports = store 