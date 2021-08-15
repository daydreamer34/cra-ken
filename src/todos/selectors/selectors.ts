import { createSelector } from 'reselect';
import { RootState } from '../../_shared/store/reducers';

const todosSlice = (state: RootState) => state.todos;

const todosNumber = createSelector(todosSlice, state => state.data.length);

export { todosNumber };
