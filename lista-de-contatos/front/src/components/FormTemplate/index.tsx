import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function FormsTemplate(props: any) {

    const [name, setName] = useState<string | null>();
    const [surname, setSurname] = useState<string | null>();
    const [email, setEmail] = useState<string | null>();
    const [number, setNumber] = useState<string | null>();

    function ContactInput(){
        let obj = {
            "name": name,
            "surname": surname,
            "email": email,
            "number": number,
        };
        console.log(obj)
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
                        onChange={event => setName(event.target.value)}
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
                        onChange={event => setSurname(event.target.value)}
                    />

                    <span className="inputTitle">Telefone:</span>
                    <input
                        className="inputBox"
                        type="tel"
                        defaultValue={props.telefone}
                        onChange={event => setNumber(event.target.value)}
                    />

                    <Link to='/list'>
                        <button 
                            className="addButton"
                            onClick={() => ContactInput()}
                        >
                            Adicionar
                        </button>
                    </Link>
                </div>

            </div>
            
        </div>
    );
}