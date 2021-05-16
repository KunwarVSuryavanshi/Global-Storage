import './App.css';
import HooksCake from './components/HooksCake';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>This is App component</h1>
        <Link to='/cake'>CAKE</Link>&nbsp;&nbsp;
        <Link to='/ice'>ICECREAM</Link>
    </div>    
  );
}

export default App;
