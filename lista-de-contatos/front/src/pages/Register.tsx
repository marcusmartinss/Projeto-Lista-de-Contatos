import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../components/LoginRegister";

export default function Register() {
    return (
        <LoginRegister
        title="Cadastre-se"
        subtitle = "Crie uma conta!"
        btn = "Finalizar cadastro"
        alreadyHaveAccount = {
            <Fragment>
                <h4>Já possui uma conta?</h4>
                <Link to='/'>Entre por aqui!</Link>
            </Fragment>
        }
        />
    );
}