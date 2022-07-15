import React, { Fragment } from "react";
import FormsTemplate from "../components/FormTemplate";

export default function NewContact(){
    return(
        <Fragment>
            <FormsTemplate
                registerTitle="Adicionar novo contato"
                registerSubtitle="Preencha os dados abaixo."
                name=""
                surname=""
                email=""
                number=""
            />
        </Fragment>
    );
}