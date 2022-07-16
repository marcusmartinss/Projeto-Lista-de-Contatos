import React, { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Link } from "react-router-dom";

import './styles.css';

export function NewContactButton () {
    return (
        <Fragment>
            <Link to="/new">
                <button className="new-contact-container">
                    <span className="plus-icon"><AiOutlinePlus size={23}/></span>
                    <span className="add-new-contact-text">Adicionar novo contato</span>
                </button>
            </Link>
        </Fragment>
    );
}