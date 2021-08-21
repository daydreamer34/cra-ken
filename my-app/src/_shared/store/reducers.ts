import { combineReducers } from 'redux';
import todosReducers from '../../home/reducers';

const rootReducer = combineReducers({
   [todosReducers.todosReducerKey]: todosReducers.default,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
