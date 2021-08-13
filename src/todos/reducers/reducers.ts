import { createReducer, ActionType } from 'typesafe-actions';
import todosTypes from '../types';
import { generateAsyncActions } from '../../_shared/store/generateAsyncActions';
import { Actions } from '../../_shared/store/actions';
import todosActions from '../actions';

type TodosState = {
   todosList: todosTypes.TodosResponse;
};

type TodosActions = ActionType<typeof todosActions.getAllTodos.success>;

const initialState = { todosList: [] } as TodosState;

const { success } = generateAsyncActions(Actions.TODOS);

function setResponse(state: TodosState, action: TodosActions) {
   return {
      ...state,
      todosList: [...action.payload],
   };
}

const todosReducer = createReducer(initialState).handleAction(success, setResponse);

export default todosReducer;
