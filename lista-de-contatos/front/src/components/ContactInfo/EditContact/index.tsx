import React, { useState } from "react";
import data from "./data.json"
import "./styles.css";

export default function EditContact(){

    const [name, setName] = useState<string>(data.name);
    const [surname, setSurname] = useState<string>(data.surname);
    const [email, setEmail] = useState<string>(data.email);
    const [number, setNumber] = useState<string>(data.number);

    function EditarContato(){
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
                Editar informações do contato,
            </div>

            <div className="registerSubtitle">
                Edite os dados abaixo.
            </div>
            
            <div className="inputContainer">

                <div className="inputSection">
                    <span className="inputTitle">Nome:</span>
                    <input
                        className="inputBox"
                        type="text"
                        defaultValue={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <span className="inputTitle">Email:</span>
                    <input
                        className="inputBox" 
                        type="text"
                        defaultValue={email}
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
                        defaultValue={surname}
                        onChange={event => setSurname(event.target.value)}
                    />

                    <span className="inputTitle">Telefone:</span>
                    <input
                        className="inputBox"
                        type="tel"
                        defaultValue={number}
                        onChange={event => setNumber(event.target.value)}
                    />

                    <button 
                        className="addButton"
                        onClick={() => EditarContato()}
                    >
                        Atualizar
                    </button>
                </div>

            </div>
            
        </div>
    );
}