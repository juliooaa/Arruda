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

    function handleRegister(value) {
        console.log(value)
    }

    return(
        <div className="container">
            <h1>Cadastrar:</h1>
            
            <div className="containerButtons">
                <button onClick={handleRegister("b1")} id='a1'>Pessoas físicas</button>
                <button onClick={handleRegister("b2")} id='a2'>Pessoas jurídicas</button>
            </div>
            <div className="containerForm">
                {listInputs}
            </div>
            <div className="register">
                <button>
                    <Icon icon="add" iconSize={13} color="#FFFFFF" />
                    Cadastrar pessoa física
                </button>
            </div>
        </div>
    )
}

export default registerPerson