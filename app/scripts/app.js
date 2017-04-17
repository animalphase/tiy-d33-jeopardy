import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import LoadingClues from './components/loading-clues.js';
import GameView from './components/game-view.js';
import AppRoot from './components/app_root.js';
import About from './components/about.js';
import Contact from './components/contact.js';

import getCategory from './get-category.js';
import getCategories from './get-categories.js';




export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/' component={GameView}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
  store.dispatch(getCategories());
}
