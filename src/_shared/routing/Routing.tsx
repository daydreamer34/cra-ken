import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Routes from './types';
import actionsTodos from '../../todos/actions';
import HomeView from '../../todos/views/HomeView';

const Routing: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(actionsTodos.getAllTodos.request({}));
   }, []);

   return (
      <Router>
         <Switch>
            <Route path={Routes.HOME}>
               <HomeView />
            </Route>
         </Switch>
      </Router>
   );
};

export default Routing;
