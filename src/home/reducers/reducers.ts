import { ActionType, createReducer, Reducer } from 'typesafe-actions';
import todosTypes from '../types';
import { generateAsyncActions, setRequest, setResponse } from '../../_shared/store/utils';
import { Actions } from '../../_shared/store/actions';
import { Request } from '../../_shared/store/types';
import { getAllTodos } from '../actions/actions';

export const todosReducerKey = 'todos';

export type TodosState = Request & {
   data: todosTypes.TodosResponse;
};

type ActionsType = ActionType<typeof getAllTodos>;

const initialState = { data: [] } as TodosState;

const { request, success } = generateAsyncActions(Actions.TODOS);

const todosReducer: Reducer<TodosState, ActionsType> = createReducer(initialState)
   .handleAction(request, (state: TodosState) => setRequest<TodosState>(state))
   .handleAction(success, (state: TodosState, action: todosTypes.TodosActionSuccess) =>
      setResponse<TodosState, Partial<TodosState>>(state, { data: [...action.payload] }),
   );

export default todosReducer;
