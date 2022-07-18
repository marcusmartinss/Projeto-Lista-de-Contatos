import React, {Fragment, useEffect, useState} from 'react';
import {FiEdit} from 'react-icons/fi/index.js';
import {FaRegTrashAlt} from 'react-icons/fa/index.js';

import './styles.css';

import api from "../../../services/api";
import { Link } from 'react-router-dom';

export interface contatoType {
    _id: string,
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string
};

function AppendNewContacts() {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        api.get('/contact').then(({data}: any) => {
            setContatos(data);
        })
    });

    if (contatos.length > 0) {
        const newLines = contatos.map((contato: contatoType) => {

            function handleDelete() {
                api.delete(`/delete/${contato._id}`);
            }

            return(
                <tr className="contact-row">
                    <td className="column">{contato.nome}</td>
                    <td className="column">{contato.sobrenome}</td>
                    <td className="column">{contato.telefone}</td>
                    <td className="column">{contato.email}</td>
                    <td className="column">
                        <div className="icons">
                            <Link to='/edit' state={{id: contato._id}}>
                                <FiEdit
                                    className="edit-icon"
                                />
                            </Link>
                            <FaRegTrashAlt 
                                className="delete-icon"
                                onClick={handleDelete}
                            />
                        </div>
                    </td>
                </tr>
            );
        });
        return(newLines);
    } else return(<tr><td>Não há Data</td></tr>);
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
