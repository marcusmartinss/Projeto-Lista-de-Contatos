import React, { Fragment } from "react";
import data from '../services/data.json';
import FormsTemplate from "../components/FormTemplate";

export default function EditContact(){
    
    return(
        <Fragment>
            <FormsTemplate
                registerTitle="Editar informações do contato"
                registerSubtitle="Edite os dados abaixo."
                nome={data.name}
                sobrenome={data.surname}
                email={data.email}
                telefone={data.number}
            />
        </Fragment>
    );
}