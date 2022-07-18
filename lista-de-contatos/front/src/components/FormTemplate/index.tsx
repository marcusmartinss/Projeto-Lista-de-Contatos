import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default function FormsTemplate(props: any) {

    const [nome, setNome] = useState<string | null>();
    const [sobrenome, setSobrenome] = useState<string | null>();
    const [email, setEmail] = useState<string | null>();
    const [telefone, setTelefone] = useState<string | null>();

    function handleInput(){
        let obj = {
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "telefone": telefone,
        };
        
        if (props.type === 1) {
            api.patch(`/update/${props.id}`, obj)
        } else {
            api.post('/create', obj)
        }
    }

    return (
        <div className="container">

            <div className="registerTitle">
                {props.registerTitle}
            </div>

            <div className="registerSubtitle">
                {props.registerSubtitle}
            </div>
            
            <div className="inputContainer">

                <div className="inputSection">
                    <span className="inputTitle">Nome:</span>
                    <input
                        className="inputBox"
                        type="text"
                        defaultValue={props.nome}
                        onChange={event => setNome(event.target.value)}
                    />

                    <span className="inputTitle">Email:</span>
                    <input
                        className="inputBox" 
                        type="text"
                        defaultValue={props.email}
                        onChange={event => setEmail(event.target.value)}
                    />

                    <Link to='/list'>
                        <button 
                            className="cancelButton"
                        >
                            Cancelar
                        </button>
                    </Link>
                </div>        

                <div className="inputSection">
                    <span className="inputTitle">Sobrenome:</span>
                    <input
                        className="inputBox"
                        type="text"
                        defaultValue={props.sobrenome}
                        onChange={event => setSobrenome(event.target.value)}
                    />

                    <span className="inputTitle">Telefone:</span>
                    <input
                        className="inputBox"
                        type="tel"
                        defaultValue={props.telefone}
                        onChange={event => setTelefone(event.target.value)}
                    />

                    <Link to='/list'>
                        <button 
                            className="addButton"
                            onClick={handleInput}
                        >
                            Adicionar
                        </button>
                    </Link>
                </div>

            </div>
            
        </div>
    );
}