import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, ListJornada, FormJornada, Usuario, ListTrilha, Sistema, PageNotFound } from '../view'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/jornada/' component={ListJornada} />
            <Route path='/:id/jornada/' component={FormJornada} />
            <Route path='/jornadas/:id/' component={ListTrilha} />
            <Route path='/usuario/' component={Usuario} />
            <Route path='/sistema/' component={Sistema} />
            <Route path='*' component={PageNotFound} /> 
        </Switch>
    </BrowserRouter>
)