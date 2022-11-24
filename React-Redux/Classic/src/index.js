import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from '../src/redux/store/ConfigStore'
import { BrowserRouter, Route } from 'react-router-dom'
import Cake from './components/Cake'
import IceCream from './components/IceCream'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route exact path='/cake' component={Cake}/>
        <Route exact path='/ice' component={IceCream}/>
      </BrowserRouter> 
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);