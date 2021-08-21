import { all, fork } from 'redux-saga/effects';
import watchFetchTodos from '../../home/sagas';

export default function* rootSaga() {
   yield all([fork(watchFetchTodos)]);
}
