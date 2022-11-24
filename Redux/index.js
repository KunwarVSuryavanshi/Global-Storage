
// Shop                Store             Holds State of the application
// Cake Ordered        Action            Describes what happened
// Shopkeeper          Redux             Ties store and action

const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const bindActionCreator = redux.bindActionCreators
//----------------------- Action --------------------------------

function orderCake(payload = 1) {
  console.log('Order Cake Action Called');
  return {
    type: 'CAKE_ORDERED',
    quantity: payload
  }
}

function restockCake(payload = 1) {
  console.log('Restock Cake Action Called');
  return {
    type: 'RESTOCK_CAKE',
    quantity: payload
  }
}

function orderIceCream(payload = 1) {
  console.log('Order Ice-cream Action Called');
  return {
    type: 'ORDER_ICECREAM',
    quantity: payload
  }
}

//---------------------- Reducer ----------------------------------

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAKE_ORDERED':
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity
      }
    case 'RESTOCK_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity
      }
    default:
      return state;
  }
}

const initialStateIC = {
  numOfIceCream: 10
}

const iceCreamReducer = (state = initialStateIC, action) => {
  switch (action.type) {
    case 'ORDER_ICECREAM':
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.quantity
      }
    default:
      return state;
  }
}
// ------------------- Store -----------------------------

const rootReducer = combineReducer({
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer
})

const store = createStore(rootReducer)

console.log('---------------Initial store----------\n', store.getState())

const unsubscribe = store.subscribe(() => console.log('---------------Updated the store----------\n', store.getState()))

// Simply dispatch using store.dispatch
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake())
store.dispatch(restockCake())
store.dispatch(restockCake())

store.dispatch(orderIceCream())

// Or we can use bindActionCreator
const action = bindActionCreator({ orderCake, restockCake, orderIceCream }, store.dispatch)

action.orderCake()


unsubscribe()