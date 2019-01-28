import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, Jornada, Usuario, Sistema, PageNotFound} from '../view'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/jornada/' component={Jornada} />
            <Route path='/usuario/' component={Usuario} />
            <Route path='/sistema/' component={Sistema} />
            <Route path='*' component={PageNotFound} /> 
        </Switch>
    </BrowserRouter>
)