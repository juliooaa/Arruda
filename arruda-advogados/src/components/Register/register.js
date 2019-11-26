import React, { useState } from "react"
import { Icon, Classes } from "@blueprintjs/core";
import { Label } from "@blueprintjs/core";

import "./styles.css"

function RegisterPerson() {

    const personInputs = ['Nome*', 'Cpf', 'RG', 'Email', 'Profissão', 'Estado civil', 'Nacionalidade*', 'Conjugue', 'Informações adicionais...'];
    const legalInputs = ['Razão social*', 'Cnpj', 'IE', 'Email', 'Atividade', 'Sócio responsável', 'Informações adicionais...'];      

    const [inputs, setInputs] = useState('person');
    
    const listPerson = personInputs.map((value) =>
        <Label>
            <input placeholder={value} />
        </Label>
    );

    const listLegal = legalInputs.map((value) =>
        <Label>
            <input placeholder={value} />
        </Label>
    );

    
    return(
        <div className="container">
            <h1>Cadastrar:</h1>
            
            <div className="containerButtons">
                <button onClick={()=>setInputs('person')}>Pessoas físicas</button>
                <button onClick={()=>setInputs('legal')}>Pessoas jurídicas</button>
            </div>

            <div className="containerForm">
                {inputs === 'person' ? listPerson : listLegal}
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

export default RegisterPerson