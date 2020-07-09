import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';

const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={Main} />
            <Route path="/biographies/:id" component={Biography} />
        </switch>
    </BrowserRouter>
)

export default Routes;