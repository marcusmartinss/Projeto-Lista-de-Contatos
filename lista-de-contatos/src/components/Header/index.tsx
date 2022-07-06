import React, { Fragment } from "react";
import './styles.css'

export function Header() {
    let title: string = 'Agenda';
    let exit: string = 'Sair';

    let loggedIn: boolean = true;

    if (loggedIn) {
        return (
            <Fragment>
                <div className="site-header">
                    <span className="title">{title}</span>
                    <span className="exit">{exit}</span>
                </div>
            </Fragment>
        );
    } else {
        return(
            <Fragment>

            </Fragment>
        );
    }
}