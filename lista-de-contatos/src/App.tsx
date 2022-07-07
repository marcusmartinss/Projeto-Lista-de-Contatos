import React, { Fragment } from 'react';
import { Header } from './components/Header';
import RegisterContact from './components/ContactInfo/NewContact';
import './App.css';
import InputContato from './pages/inputcontato';

function App() {  
  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <div>
        <InputContato/>
      </div>
    </Fragment>
  );
}

export default App;
