import React from "react"

import "./styles.css"

function menu() {
    
    const options = ['Listagem de pessoas', 'Manutenção de tabelas'];
    const listOptions = options.map((value) =>
        <p>{value}</p>
    );
    
    return(
        <div className="options">
            <ul>
                <li>
                    {listOptions}
                </li>
            </ul>
        </div>
    )
}

export default menu