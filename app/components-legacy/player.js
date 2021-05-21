import React from "react";
import ThemeContext from './../context/theme'

export function Player({playerProfile, winnerLoser, score, children}) {
    const {name, avatar_url, login, html_url} = playerProfile;
    const {theme} = React.useContext(ThemeContext)
    return (<li className={`grid-cell ${theme}`} key={name}>
        <h1 className='center-text'>{winnerLoser}</h1>
        <img src={avatar_url} className='avatar'/>
        <h3 className={'center-text'}>Score {score}</h3>
        <a href={html_url}>
            <h2 className={'center-text'}>{login}</h2>
        </a>
        {children}
    </li>)
}