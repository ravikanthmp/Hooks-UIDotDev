import React, {useState} from "react";
import LangAsButton from "./langButton";
import fetchFromGithub from "./../utils/util"
import {ReposGrid} from "./reposGrid";

const init = {
    selectedLanguage : 'Java',
    repos : {},
    error : null,
};

export function Popular2(){

    const [state, setState] = useState(init);

    let updateLanguage = (lang) => {

        setState((prev) => {
            return {
                ...prev,
                selectedLanguage : lang,
                error : null,
            }
        });

        const savedRepos = state.repos[lang];
        console.log({state})
        if (!savedRepos){
            console.log(`update language called..fetching from net`)
            fetchRepos(lang)
                .then(data => {
                        setState( ({repos}) => {
                            repos[lang] = data;
                            return {
                                selectedLanguage : lang,
                                error : null,
                                repos : {
                                    ...repos,
                                    [lang] : data
                                }
                            }
                        })
                    }
                )
                .catch(err => {
                    this.setState({
                        selectedLanguage : lang,
                        error : err
                    })
                })
        }else {
            console.log(`fetching from cache. current state is ` + JSON.stringify(state, null, 2))
            return savedRepos;
        }
    }

    let fetchRepos = (lang) => {
        return fetchFromGithub(lang)
            .then(data => data.json())
            .then(data => {
                if (data.items){
                    return data.items
                }else {
                    throw Error('no data found!')
                }
            })
    }

    let isLoading = () => {
        console.log({state})
        return !state.repos || !state.repos[state.selectedLanguage] && !state.error
    }

    return (<React.Fragment>
        <PopularUI languages={['Java', 'C', 'All']} updateLanguage={updateLanguage} selectedLanguage={state.selectedLanguage} isLoading={isLoading}/>

        {isLoading() && <p>Loading!</p>}
        <ReposGrid repos={state.repos[state.selectedLanguage]}/>
    </React.Fragment>)
}

function PopularUI({languages, updateLanguage, selectedLanguage, isLoading}) {
    return (
        <React.Fragment>
            <ul className="flex-center">

                {languages.map(
                    lang => (
                    <LangAsButton lang={lang}
                                  updateLanguage={updateLanguage}
                                  selectedLanguage={selectedLanguage}
                                  key={lang}/>
                    ))
                }

            </ul>
        </React.Fragment>
    )
}
