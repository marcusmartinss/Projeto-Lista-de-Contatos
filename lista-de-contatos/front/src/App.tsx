import React, { Fragment } from 'react';

import { Header } from './components/Header';
import './App.css';

import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

import ContactsList from './pages/ContactsList';

export function App() {
  
  function changeTela() {
    let tela: string = '0';

    switch (tela) {
      case '0':
        return <NewContact/>;
      case '1':
        return <EditContact/>
      case '2':
        return <ContactsList/>
    }
  }
    

  return(
      <Fragment>
        <Header />
        {changeTela()}
      </Fragment>
  );
}

export default App;
