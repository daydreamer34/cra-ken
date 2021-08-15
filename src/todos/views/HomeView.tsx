import React from 'react';
import useTodos from '../hooks/useTodos';
import logo from '../../_shared/assets/logo.svg';

const HomeView = () => {
   const { todosNumber } = useTodos();
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               {todosNumber} Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
};

export default HomeView;
