import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../components/LoginRegister";

export default function Login() {
    return (
        <LoginRegister
            title="Login"
            subtitle = "Acesse sua agenda"
            btn = "Entrar"
            alreadyHaveAccount = {
                <Fragment>
                    <h4>Ainda não possui conta?</h4>
                    <Link to='/register'>Crie uma agora!</Link>
                </Fragment>
            }
        />
    );
}