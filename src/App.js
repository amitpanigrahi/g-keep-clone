import React from 'react';
import {GlobalStyles} from './styles/global';
import {Route, HashRouter as Router, Switch, Redirect} from "react-router-dom";
import MidGuard from "./components/_App/MidGuard";
import {DEFAULT_ROUTE, BASE_URL} from "./constants/routesMap";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Router basename={BASE_URL} hashType={"noslash"}>
                <Switch>
                    <Route exact path={`${BASE_URL}:activeTabId?`} component={MidGuard} />
                    <Route path={"*"}>
                        <Redirect to={DEFAULT_ROUTE} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
