import React, { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import './styles.css';

export function NewContactButton () {
    return (
        <Fragment>
            <button className="new-contact-container">
                <span className="plus-icon"><AiOutlinePlus size={23}/></span>
                <span className="add-new-contact-text">Adicionar novo contato</span>
            </button>
        </Fragment>
    );
}