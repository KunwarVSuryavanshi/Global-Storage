import {combineReducers} from 'redux'
import CakeReducer from './CakeReducer'
import IceCreamReducer from './IceCreamReducer';

const rootReducer = combineReducers({
    cake: CakeReducer,
    ice: IceCreamReducer
})

export default rootReducer;