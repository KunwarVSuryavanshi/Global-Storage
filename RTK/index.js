const store = require('./app/store')
const {cakeActions} = require('./features/cake/cake.slice')
const { iceCreamActions } = require('./features/icecream/icecream.slice')

console.log('Initial State of the store', store.getState())

const unsubscribe = store.subscribe(() => console.log('-------Store Updated------ \n', store.getState()))

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked({quantity: 2}));

store.dispatch(iceCreamActions.orderIC())
store.dispatch(iceCreamActions.restockIC(2))

unsubscribe();