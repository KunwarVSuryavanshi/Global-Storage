const inititalState = {
  numOfIceCream: 20,
};

export default function IceCreamReducer(state = inititalState, action) {
  switch (action.type) {
    case "ADD_ICECREAM":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state
    }
}
