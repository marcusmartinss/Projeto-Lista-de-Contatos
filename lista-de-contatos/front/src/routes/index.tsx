import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ContactsList from '../pages/ContactsList';
import EditContact from '../pages/EditContact';
import NewContact from '../pages/NewContact';

export default class Render extends React.Component {

  rotas = (
    <Routes>
        <Route path="/list" element={<ContactsList/>} />
        <Route path="/edit" element={<EditContact/>}  />
        <Route path="/new"  element={<NewContact/>}   />
    </Routes>
  )

  render() {
    return (
      this.rotas
    );
  }
}
