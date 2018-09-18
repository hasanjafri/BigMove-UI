import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Services from './views/services';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Services}/>
            <Route path='/services' component={Services}/>
        </Switch>
    )
};

export default Routes