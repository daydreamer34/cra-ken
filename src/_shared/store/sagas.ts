import { all, fork } from 'redux-saga/effects';
import watchFetchTodos from '../../todos/sagas';

export default function* rootSaga() {
   yield all([fork(watchFetchTodos)]);
}
