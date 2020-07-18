import React from 'react';
import {GlobalStyles} from './styles/global';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import MidGuard from "./components/_App/MidGuard";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Router>
                <Switch>
                    <Route exact path={"/:activeTabId?"} component={MidGuard} />
                    <Route path={"*"}>
                        <Redirect to="/active" />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
