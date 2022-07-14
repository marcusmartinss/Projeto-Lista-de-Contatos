import React, { useCallback, useState } from 'react';

interface IFormState {
    nome: string;
    email: string;
    sobrenome: string;
    telefone: string;
}

export const CreateContactForm = () => {

    const [formState, setFormState] = useState<IFormState>({
        nome: "",
        email: "",
        sobrenome: "",
        telefone: "",
    });

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {

            event.preventDefault();

            const { nome } = formState;

            if (!nome) {
                window.alert("O campo nome deve ser preenchido!")

                return;
            }

            window.alert("O contato foi registrado com sucesso!")
        },
        [formState]
    );

    const handleChangeInput = useCallback(
        (event: React.FormEvent<HTMLInputElement>) => {

            const targetInput = event.currentTarget;

            const { value, name } = targetInput;

            setFormState({
                ...formState,
                [name]: value,
            });

        },
        [formState]
    );

    return (
        <div className="container mt-5">
            <p className="tituloNovoContato">Adicionar novo contato,</p>
            <p className="textoPreencha">Preencha os dados abaixo.</p>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Nome
                    </label>

                    <input
                        type="nome"
                        className="form-control"
                        id="nome"
                        name="nome"
                        required
                        value={formState.nome}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Sobrenome
                    </label>

                    <input
                        type="sobrenome"
                        className="form-control"
                        id="sobrenome"
                        name="sobrenome"
                        value={formState.sobrenome}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Telefone
                    </label>

                    <input
                        type="telefone"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        value={formState.telefone}
                        onChange={handleChangeInput}
                    />
                </div>

                <button type="reset" className="botao.Cancelar">
                    Cancelar
                </button>

                <button type="submit" className="botao.adicionar">
                    Adicionar
                </button>
            </form>

        </div>
    )
}
