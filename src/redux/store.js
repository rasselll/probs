import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import questionsReducer from './quizlec1/reducers/questions-reducer';

export let store = createStore(
  questionsReducer,
  applyMiddleware(thunk)
);

export let dispatch = store.dispatch