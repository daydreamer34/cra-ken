import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './types';
import HomeView from '../../home/views/HomeView';

const Routing: React.FC = () => {
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
