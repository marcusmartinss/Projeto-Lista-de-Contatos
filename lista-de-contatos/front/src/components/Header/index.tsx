import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './styles.css'

export function Header(props: any) {
    let title: string = 'Agenda';
    let exit: string = 'Sair';

    return (
        <Fragment>
            <div className="site-header">
                <Link to={'/list'}>
                    <span className="main-title">{title}</span>
                </Link>
                <Link to='/'>
                    <span className="exit">{exit}</span>
                </Link>
            </div>
        </Fragment>
    );
}