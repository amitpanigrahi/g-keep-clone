import React from 'react';
import {GlobalStyles} from './styles/global';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import MidGuard from "./components/_App/MidGuard";
import {DEFAULT_ROUTE, APP_HOME} from "./constants/routesMap";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Router>
                <Switch>
                    <Route exact path={`${APP_HOME}/:activeTabId?`} component={MidGuard} />
                    <Route path={"*"}>
                        <Redirect to={DEFAULT_ROUTE} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
