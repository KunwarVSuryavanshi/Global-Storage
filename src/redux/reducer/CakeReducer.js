const initialState = {
  numOfCakes: 10,
};

export default function CakeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CAKE":
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
}
