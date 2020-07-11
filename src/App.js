import React from 'react';
import {GlobalStyles} from './styles/global';
import WorkSpaceComponent from "./containers/WorkSpace";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <WorkSpaceComponent />
        </>
    );
};

export default App;
