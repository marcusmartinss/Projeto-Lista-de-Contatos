import React, { Fragment } from "react";

import ContactList from "../components/ContactList";
import { Header } from "../components/Header";

export default function ContactsList() {
    return (
        <Fragment>
            <Header/>
            <ContactList/>
        </Fragment>
    );
}