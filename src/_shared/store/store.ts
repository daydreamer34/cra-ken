import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducerKey, TodosState } from '../../todos/reducers/reducers';
import { sagaMiddleware } from './middleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

export interface ApplicationState {
   [todosReducerKey]: TodosState;
}

const middlewares = [sagaMiddleware];

function configureStore() {
   const composeEnhancers = composeWithDevTools({});
   const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

   sagaMiddleware.run(rootSaga);

   return store;
}

const store = configureStore();

export default store;
