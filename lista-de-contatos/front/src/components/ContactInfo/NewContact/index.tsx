import React, { useState } from "react";

import "./styles.css";

export default function NewContact(){

    const [name, setName] = useState<string | null>();
    const [surname, setSurname] = useState<string | null>();
    const [email, setEmail] = useState<string | null>();
    const [number, setNumber] = useState<string | null>();

    function CriarContato(){
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
                Adicionar novo contato,
            </div>

            <div className="registerSubtitle">
                Preencha os dados abaixo.
            </div>
            
            <div className="inputContainer">

                <div className="inputSection">
                    <span className="inputTitle">Nome:</span>
                    <input
                        className="inputBox"
                        type="text"
                        onChange={event => setName(event.target.value)}
                    />

                    <span className="inputTitle">Email:</span>
                    <input
                        className="inputBox" 
                        type="text"
                        onChange={event => setEmail(event.target.value)}
                    />

                    <button 
                        className="cancelButton"
                        onClick={() => {}}
                    >
                        Cancelar
                    </button>
                </div>        

                <div className="inputSection">
                    <span className="inputTitle">Sobrenome:</span>
                    <input
                        className="inputBox"
                        type="text"
                        onChange={event => setSurname(event.target.value)}
                    />

                    <span className="inputTitle">Telefone:</span>
                    <input
                        className="inputBox"
                        type="tel"
                        onChange={event => setNumber(event.target.value)}
                    />

                    <button 
                        className="addButton"
                        onClick={() => CriarContato()}
                    >
                        Adicionar
                    </button>
                </div>

            </div>
            
        </div>
    );
}