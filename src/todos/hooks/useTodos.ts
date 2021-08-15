import { useSelector } from 'react-redux';
import { todosSelector } from '../selectors';

const useTodos = () => {
   const todosNumber = useSelector(todosSelector.todosNumber);

   return { todosNumber };
};

export default useTodos;
