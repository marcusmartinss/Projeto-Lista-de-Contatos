import React, { Fragment } from 'react';
import { Header } from './components/Header';
import RegisterContact from './components/RegisterContact';
import './App.css';

function App() {  
  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <body>
        <RegisterContact/>
      </body>
    </Fragment>
  );
}

export default App;
