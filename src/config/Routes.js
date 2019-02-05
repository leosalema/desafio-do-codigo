import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { JornadaList, JornadaForm, Usuario, ListTrilha, Sistema, PageNotFound } from '../view'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={JornadaList} exact />
            <Route path='/jornadas/' component={JornadaList} />
            <Route path='/:id/jornada/' component={JornadaForm} />
            <Route path='/jornada/:id/' component={ListTrilha} />
            <Route path='/usuario/' component={Usuario} />
            <Route path='/sistema/' component={Sistema} />
            <Route path='*' component={PageNotFound} /> 
        </Switch>
    </BrowserRouter>
)