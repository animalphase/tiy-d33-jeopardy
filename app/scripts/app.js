import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import GameView from './components/game-view.js';
import AppRoot from './components/app_root.js';
import About from './components/about.js';
import Contact from './components/contact.js';



export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={GameView}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}




// example category request:
// http://jservice.io/api/category?id=18418

const firstCategory = 1;
const lastCategory = 18418;

// example clue request with value and specific category:
// http://jservice.io/api/clues?value=200&category=223




// generating data table:

const categoryCount = 6;
const questionValues = [200, 400, 600, 800, 1000];

let questions = [];

const initializeQuestions = () => {
  for(let categoryColumn = 0; categoryColumn < categoryCount; categoryColumn++) {
    questions.push(['😮category name here😮']);
    questionValues.forEach( (value, i, array) => {
      questions[categoryColumn].push([value, '💁🏻Question here💁🏻']);
      // TODO: question model could be an object with value and text (and whatever other propery)
    });
  }
};

initializeQuestions();
console.log(questions);



// TODO: model for question
// TODO: array of question value pairs?
