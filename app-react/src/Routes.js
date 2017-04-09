// Load React
import React from 'react'

// import apps

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
import App from './App'
import Signin from './Signin'
import Signup from './Signup'
import Gettingstarted from './Gettingstarted'
import Steptwo from './Steptwo'
import Dashboard from './Dashboard'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/gettingstarted" component={Gettingstarted} />
                <Route path="/steptwo" component={Steptwo} />
                <Route path="/dashboard" component={Dashboard} />
            </Router>
    }
}

export default Routes