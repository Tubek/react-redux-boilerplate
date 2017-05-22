import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from 'containers/App'
import Home from 'containers/Home'
import Contact from 'containers/Contact'
import PageNotFound from 'containers/PageNotFound'

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="contact" component={Contact}/>
        <Route status={404} path="*" component={PageNotFound}/>
    </Route>
)
