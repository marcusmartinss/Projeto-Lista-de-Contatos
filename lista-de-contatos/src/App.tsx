import React, { Fragment } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {  
  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <body>
        <div className="container">
          <div className="contacts-title">
            Seus contatos
          </div>
          <div className="contats-subtitle">
            Todos os seus contatos estão listados abaixo.
          </div>
        </div>
      </body>
    </Fragment>
  );
}

export default App;