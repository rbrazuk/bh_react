import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Home from './components/home';
import Shows from './components/shows';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <div>HEADER</div>
      <Switch>
        <Route path="/shows" component={Shows}/>
        <Route path="/" component={Home}/>
      </Switch>
      <div>FOOTER</div>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
