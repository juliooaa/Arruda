import React from "react"
import { Icon } from "@blueprintjs/core";

import "./styles.css"

function Header() {
    
    const titles = ['Agenda', 'Usuários', 'Pessoas', 'Casos', 'Documentações'];
    const icons = ['calendar', 'people', 'user', 'document', 'box'];

    const listMenu = titles.map((value) =>
        <p>{value}</p>
    );
    const listIcons = icons.map((value) => 
        <Icon icon={value} iconSize={17} color="#ACACAC" />
    );
    
    return (
        <>
        <div className="headerWrapper">
            <ul className="contentList">
                <li>
                    {listIcons}
                </li>
                <div className="contentMenu">
                    {listMenu}
                </div>
            </ul>
            <div className="research">
                <input type="search" placeholder="Pesquisar na plataforma..." dir="auto" />
                <button>
                    <Icon icon="search" iconSize={14} color="#ACACAC" />
                </button>
            </div>
        </div>
        </>
     )
}

export default Header

