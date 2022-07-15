import React, { Fragment } from "react";
import { ContactsTable } from "./ContactsTable";
import { NewContactButton } from "./NewContactButton";

import './styles.css';

export default function contactsList () {

    return (
        <Fragment>
            <div className="container">
                <div className="contacts-title">
                Seus contatos
                </div>
                <div className="contats-subtitle">
                Todos os seus contatos estão listados abaixo.
                </div>
            </div>

            <NewContactButton/>

            <ContactsTable/>
        </Fragment>
    );
}