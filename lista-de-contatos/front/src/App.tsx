import React, { Fragment } from 'react';

import { Header } from './components/Header';
import './App.css';

import Render from './routes';
export function App() {

  return(
      <Fragment>
        <Header />
        <Render />
      </Fragment>
  );
}

export default App;
