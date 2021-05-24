import {FaCodeBranch, FaExclamationTriangle, FaStar, FaUser} from "react-icons/fa";
import React from "react";

export function ReposGrid({repos}) {
    if (!repos) {
        return null;
    }
    return (
        <ul className={'grid-container space-around'}>
            {repos.map((repo, index) => {

                const {id, name, owner, html_url, open_issues_count, stargazers_count, forks} = repo;
                const {avatar_url, login} = owner;
                return (<li className={'grid-cell'} key={id}>
                        <h1 className='center-text'>{index}</h1>
                        <img src={avatar_url} className='avatar'/>
                        <a href={html_url}>
                            <h2 className={'center-text'}>{login}</h2>
                        </a>
                        <ul>
                            <li>
                                <FaUser size={22}/>
                                {name}
                            </li>

                            <li>
                                <FaStar size={22}/>
                                {stargazers_count}
                            </li>

                            <li>
                                <FaCodeBranch size={22}/>
                                {forks}
                            </li>

                            <li>
                                <FaExclamationTriangle size={22}/>
                                {open_issues_count}
                            </li>

                        </ul>
                    </li>
                )
            })}
        </ul>

    )
}