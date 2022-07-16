import React from 'react';

import { Route, Routes } from 'react-router-dom';

import ContactsList from '../pages/ContactsList';
import EditContact from '../pages/EditContact';
import Login from '../pages/Login';
import NewContact from '../pages/NewContact';
import Register from '../pages/Register';

export default class RenderRoute extends React.Component {

  rotas = (
    <Routes>
        <Route path="/"         element={<Login/>}        />
        <Route path="/register" element={<Register/>}     />
        <Route path="/list"     element={<ContactsList/>} />
        <Route path="/edit"     element={<EditContact/>}  />
        <Route path="/new"      element={<NewContact/>}   />
    </Routes>
  )

  render() {
    return (
      this.rotas
    );
  }
}
