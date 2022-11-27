// const configureStore = require('@reduxjs/toolkit').configureStore
import { configureStore } from '@reduxjs/toolkit'
import iceCreamReducer from '../features/icecream/icecream.slice'
import cakeReducer from '../features/cake/cake.slice';

// const cakeReducer = require('../features/cake/cake.slice')
// const iceCreamReducer = require('../features/icecream/icecream.slice')

export default configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer
  }
})