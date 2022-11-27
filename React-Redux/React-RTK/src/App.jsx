import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ordered, restocked } from './features/cake/cake.slice'
import { restockIC, orderIC } from "./features/icecream/icecream.slice";

function App() {
  const { cake : cakeCount, iceCream: iceCreamCount} = useSelector((state) => {
    return {
      cake: state.cake.numOfCakes,
      iceCream: state.iceCream.noOfIceCream,
    };
  })

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <div>
          <h1>Cake Count: { cakeCount}</h1>
        </div>
        <br />
        <br />
        <div>
          <button onClick={() => dispatch(ordered())}>Order cake</button>
        </div>
        <br />
        <div>
          <button onClick={() => dispatch(restocked({quantity: 5}))}>Restock Cake</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Ice Cream Count: {iceCreamCount }</h1>
        </div>
        <br />
        <br />
        <div>
          <button onClick={() => dispatch(orderIC())}>Order Ice Cream</button>
        </div>
        <br />
        <div>
          <button onClick={() => dispatch(restockIC(2))}>Restock Ice Cream</button>
        </div>
      </div>
    </div>
  );
}

export default App;
