import { ActionType } from 'typesafe-actions';
import todosActions from '../actions';

type TodosResponse = {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}[];

type TodosActionSuccess = ActionType<typeof todosActions.getAllTodos.success>;

export type { TodosResponse, TodosActionSuccess };
