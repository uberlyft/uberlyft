// Load React
import React from 'react'

// import apps

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
import App from './App'
import Comparison from './Comparison'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/comparison" component={Comparison}/>
            </Router>
    }
}

export default Routes