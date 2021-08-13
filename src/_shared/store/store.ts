import { configureStore } from '@reduxjs/toolkit';
import { sagaMiddleware } from './middleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
