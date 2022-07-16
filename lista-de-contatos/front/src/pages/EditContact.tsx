import React, { Fragment } from "react";
import data from '../services/FormTemplate/data.json';
import FormsTemplate from "../components/FormTemplate";
import { Header } from "../components/Header";

export default function EditContact(){
    
    return(
        <Fragment>
            <Header />
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