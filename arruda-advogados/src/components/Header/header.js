import React, {Component} from "react"
import { Icon } from "@blueprintjs/core";

import "./styles.css"

function Header() {
    
    const names = ['Agenda', 'Usuários', 'Pessoas', 'Casos', 'Documentações'];
    const icons = ['calendar', 'people', 'user', 'document', 'box'];

    const listMenu = names.map((value) =>
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
                    <div className="contentMenu">
                        {listMenu}
                    </div>
                </li>
            </ul>
            <div class="contentSearch">
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

