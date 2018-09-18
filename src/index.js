import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Home from './components/home';
import Shows from './components/shows';
import Music from './components/music';
import Header from './components/header';
import Footer from './components/footer';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/shows" component={Shows}/>
        <Route path="/music" component={Music}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
