import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { contatoType } from "../components/ContactList/ContactsTable";

import FormsTemplate from "../components/FormTemplate";
import { Header } from "../components/Header";
import api from "../services/api";

export default function EditContact(){
    
    const location = useLocation();
    const {id}: any = location.state

    const [contato, setContato] = useState<contatoType>({
        _id: "",
        nome: "",
        sobrenome: "",
        email: "",
        telefone: ""
    })

    useEffect(() => {
        api.get(`/contact/${id}`).then(({data}: any) => {
            setContato(data)
        })
    })

    return(
        <Fragment>
            <Header />
            <FormsTemplate
                type={1}
                registerTitle="Editar informações do contato"
                registerSubtitle="Edite os dados abaixo."
                nome={contato.nome}
                sobrenome={contato.sobrenome}
                email={contato.email}
                telefone={contato.telefone}
                id={contato._id}
            />
        </Fragment>
    );
}