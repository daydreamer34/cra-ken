import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { generateAsyncActions } from '../../_shared/store/generateAsyncActions';
import fetchTodos from '../api';
import { Actions } from '../../_shared/store/actions';
import actionsTodos from '../actions';

const { request } = generateAsyncActions(Actions.TODOS);

export function* sagaTodos(): SagaIterator {
   try {
      const response = yield call(fetchTodos);
      const json = yield response.json();
      yield put(actionsTodos.getAllTodos.success(json));
      return json;
   } catch (error) {
      console.log(error);
      return error;
   }
}

function* watchFetchTodos() {
   yield takeEvery(request, sagaTodos);
}

export default watchFetchTodos;
