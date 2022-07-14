import React, { Fragment } from 'react';
import { Header } from './components/Header';
import './App.css';
import InputContato from './pages/inputcontato';

import { Contacts } from './components/ContactsList';

function App() {  

  let tela: string = '1';

  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <body>
        { tela === '1' ? <Contacts/> : <InputContato/> }
      </body>
    </Fragment>
  );
}

export default App;