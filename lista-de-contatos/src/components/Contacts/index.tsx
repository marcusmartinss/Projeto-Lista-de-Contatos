import React, { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import './styles.css';

export function Contacts () {

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

            <button className="new-contact-container">
                <span className="plus-icon"><AiOutlinePlus size={23}/></span>
                <span className="add-new-contact-text">Adicionar novo contato</span>
            </button>
        </Fragment>
    );
}