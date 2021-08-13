import { createAsyncAction } from 'typesafe-actions';
import { generateAsyncActions } from '../../_shared/store/generateAsyncActions';
import { Actions } from '../../_shared/store/actions';
import todosTypes from '../types';

const { request, success, error } = generateAsyncActions(Actions.TODOS);

const getAllTodos = createAsyncAction(request, success, error)<
   any,
   todosTypes.TodosResponse,
   any
>();

export { getAllTodos };
