import React from "react";

import "./styles.css";

export default function RegisterContact(){
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
                    />

                    <span className="inputTitle">Email:</span>
                    <input
                        className="inputBox" 
                        type="text"
                    />

                    <button className="cancelButton">
                        Cancelar
                    </button>
                </div>        

                <div className="inputSection">
                    <span className="inputTitle">Sobrenome:</span>
                    <input
                        className="inputBox"
                        type="text"
                    />

                    <span className="inputTitle">Telefone:</span>
                    <input
                        className="inputBox"
                        type="tel"
                    />

                    <button className="addButton">
                        Adicionar
                    </button>
                </div>

            </div>
            
        </div>
    );
}