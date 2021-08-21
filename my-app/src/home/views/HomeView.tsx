import React, { useEffect } from 'react';
import useTodos from '../hooks/useTodos';
import logo from '../../_shared/assets/logo.png';

const HomeView = () => {
   const { todosNumber, initData } = useTodos();

   useEffect(() => {
      initData();
   }, []);

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               We have loaded a <span>{todosNumber} Todos</span>.
            </p>
            <p>Open the Dev Tools and see the Redux Store!</p>
            <a
               className="App-link"
               href="https://github.com/crtdaniele/cra-ken"
               target="_blank"
               rel="noopener noreferrer"
            >
               Github Project
            </a>
         </header>
      </div>
   );
};

export default HomeView;
