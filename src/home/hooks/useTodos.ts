import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../selectors';
import actionsTodos from '../actions';

const useTodos = () => {
   const dispatch = useDispatch();
   const todosNumber = useSelector(todosSelector.todosNumber);

   const initData = useCallback(() => {
      dispatch(actionsTodos.getAllTodos.request({}));
   }, []);

   return { todosNumber, initData };
};

export default useTodos;
