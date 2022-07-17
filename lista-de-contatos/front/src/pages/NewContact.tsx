import React, { Fragment } from "react";
import FormsTemplate from "../components/FormTemplate";
import { Header } from "../components/Header";

export default function NewContact() {
    return(
        <Fragment>
            <Header />
            <FormsTemplate
                type={0}
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