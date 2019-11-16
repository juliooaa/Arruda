import React from "react"
import { Icon, Classes } from "@blueprintjs/core";
import { Label } from "@blueprintjs/core";

import "./styles.css"

function registerPerson() {
    return(
        <div className="container">
            <h1>Cadastrar:</h1>
            <div className="buttons">
                <button type="button">Button</button>
                <button type="button">Pessoas físicas</button>
            </div>
            <div className="form">
                <Label>
                    <input className={Classes.INPUT} placeholder="Nome*" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Cpf" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="RG" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Email" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Profissão" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Estado civil" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Nacionalidade*" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Conjugue" />
                </Label>
                <Label>
                    <input className={Classes.INPUT} placeholder="Informações adicionais..." />
                </Label>
            </div>
            <button Icon="arrow-right" type="button" text="Next step" />
        </div>
    )
}

export default registerPerson