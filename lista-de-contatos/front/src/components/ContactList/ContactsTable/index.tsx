import React, {Fragment} from 'react';
import {FiEdit} from 'react-icons/fi/index.js';
import {FaRegTrashAlt} from 'react-icons/fa/index.js';

import './styles.css';

import Data from '../../../services/ContactList/test.json';

function AppendNewContacts() {
    if (Data !== null) {
        const newLines = Data.map(element => {
            return(
                <tr className="contact-row">
                    <td className="column">{element.Nome}</td>
                    <td className="column">{element.Sobrenome}</td>
                    <td className="column">{element.Telefone}</td>
                    <td className="column">{element.Email}</td>
                    <td className="column">
                        <div className="icons">
                            <FiEdit className="edit-icon"/>
                            <FaRegTrashAlt className="delete-icon"/>
                        </div>
                    </td>
                </tr>
            );
        });
        return(newLines);
    } else return(<tr><td>Não há contatos</td></tr>);
}

function TableConstruction() {
    return (
        <Fragment>
            <table className="contacts-table">
                <tr className="contact-row">
                    <th className="column">Nome</th>
                    <th className="column">Sobrenome</th>
                    <th className="column">Telefone</th>
                    <th className="column">E-mail</th>
                    <th className="column"></th>
                </tr>
                
                {AppendNewContacts()}
            </table>
        </Fragment>
    );
}

export function ContactsTable() {
    return (
        <Fragment>
            {TableConstruction()}
        </Fragment>
    );
}