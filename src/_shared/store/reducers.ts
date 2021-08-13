import { combineReducers } from '@reduxjs/toolkit';
import todosReducers from '../../todos/reducers';

const rootReducer = combineReducers({
   todos: todosReducers.default,
});

export default rootReducer;
