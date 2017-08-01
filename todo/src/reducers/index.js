// reducers - functions that take in the old state and an action to return new state, pure functions
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;
