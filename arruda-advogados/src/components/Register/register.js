import React from "react"
import { Icon, Classes } from "@blueprintjs/core";
import { Label } from "@blueprintjs/core";

import "./styles.css"

function registerPerson() {

    const inputs = ['Nome*', 'Cpf', 'RG', 'Email', 'Profissão', 'Estado civil', 'Nacionalidades*', 'Conjugue', 'Informações adicionais...'];

    const listInputs = inputs.map((value) =>
        <Label>
            <input className={Classes.INPUT} placeholder={value} />
        </Label>
    );

    return(
        <div className="container">
            <h1>Cadastrar:</h1>
            
            <div className="buttons">
                <button type="button">Button</button>
                <button type="button">Pessoas físicas</button>
            </div>
            <div className="form">
                {listInputs}
            </div>
            <button Icon="arrow-right" type="button" text="Next step" />
        </div>
    )
}

export default registerPerson