import {createStore} from 'redux'
import CakeReducer from '../reducer/CakeReducer';
import rootReducer from '../reducer/RootReducer'

const store = createStore(rootReducer)

export default store;