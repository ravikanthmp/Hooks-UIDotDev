import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components-legacy/battle";
import CoinMarket from "./components-legacy/coinMarket";
import Myform from "./components-legacy/myform";
import PlayerInput from "./components-legacy/playerInput";
import Popular from "./components-legacy/popular";
import {LocaleContext} from "./components-legacy/localeContext";
import {BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect} from "react-router-dom";
import Results from "./components-legacy/results";
import {Provider as ThemeProvider} from "./context/theme";

class Hello extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            locale : 'it',
            toggle : (lang) => this.setState( ({locale}) => ({locale : lang})),
            theme : 'light',
            toggleTheme : () => this.setState( ({theme}) => ({
                theme : theme === 'light' ? 'dark' : 'light'
            }))
        }
        this.activeStyle = {
            color : 'red'
        };

    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (<Router>
                <ThemeProvider value={this.state}>
                    <LocaleContext.Provider value={this.state}>
                        <div className="container">
                            <div>
                                <ul>
                                    <li>
                                        <NavLink
                                            activeStyle={this.activeStyle}
                                            exact
                                            to="/">Popular</NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            activeStyle={this.activeStyle}
                                            to="/battle">Battle</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <Switch>
                                <Route exact path="/" component={Popular}/>
                                <Route path="/battle" component={Battle}/>
                                <Route path='/results' component={Results}/>
                                <Route component={() => (<h3>Not Found bruh!</h3>)}/>
                            </Switch>



                        </div>
                    </LocaleContext.Provider>
                </ThemeProvider>

        </Router>


        )
    }
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)