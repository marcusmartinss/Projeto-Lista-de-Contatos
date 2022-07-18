import React, { Fragment } from 'react';

import { Header } from './components/Header';
import './App.css';

import InputContato from './pages/inputcontato';
import { Contacts } from './components/ContactsList';
import Login from './components/Entrada/Login';
import Cadastro from './components/Entrada/Cadastro';

const App = () => {

  return (
    <Fragment>
      <Cadastro/>
    </Fragment>
  );
}

export default App;
