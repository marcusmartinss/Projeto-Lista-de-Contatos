import React, {Fragment} from 'react';
import {FiEdit} from 'react-icons/fi/index.js';
import {BsTrash} from 'react-icons/bs/index.js';

import './styles.css';

export function ContactsTable() {
    return (
        <Fragment>
            <table className="contacts-table">
                <td>
                    <tr className="column-title">Nome</tr>
                </td>
                <td>
                    <tr className="column-title">Sobrenome</tr>
                </td>
                <td>
                    <tr className="column-title">Telefone</tr>
                </td>
                <td>
                    <tr className="column-title">E-mail</tr>
                </td>
                <td>
                    <tr>
                        <FiEdit/>
                        <BsTrash/>
                    </tr>
                </td>
            </table>
        </Fragment>
    );
}