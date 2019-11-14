import React from "react"
import { Icon } from "@blueprintjs/core";

import "./styles.css"

function Header() {
    return (
        <div className="headerWrapper">
            <ul className="contentList">
                <li>
                    <Icon icon="calendar" iconSize={17} color="#ACACAC" />
                    <p>Agenda</p>
                </li>
                <li>
                    <Icon icon= "people" iconSize={17} color="#ACACAC" />
                    <p>Usuários</p>
                </li>
                <li>
                    <Icon icon= "user" iconSize={17} color="#ACACAC" />
                    <p>Pessoas</p>
                </li>
                <li>
                    <Icon icon= "document" iconSize={17} color="#ACACAC" />
                    <p>Casos</p>
                </li>
                <li>
                    <Icon icon= "box" iconSize={17} color="#ACACAC" />
                    <p>Documentações</p>
                </li>
            </ul>
            <div class="contentSearch">
                <input type="search" placeholder="Pesquisar na plataforma..." dir="auto" />
                <button>
                    <Icon icon="search" iconSize={14} color="#ACACAC" />
                </button>
            </div>
        </div>
    )
}

export default Header