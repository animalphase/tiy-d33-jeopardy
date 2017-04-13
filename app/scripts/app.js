import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRoot from './components/app_root.js';
import About from './components/about.js';
import Contact from './components/contact.js';



export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={AppRoot}/>
          <Route exact path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}


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
