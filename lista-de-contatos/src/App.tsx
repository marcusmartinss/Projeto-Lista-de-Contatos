import React, { Fragment } from 'react';
import { Header } from './components/Header';
import './App.css';

import { Contacts } from './components/ContactsList';

function App() {  
  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <body>
        <Contacts/>
      </body>
    </Fragment>
  );
}

export default App;