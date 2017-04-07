// Load React
import React from 'react'

// import apps

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import store from './Reducers'
// const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import App from './App'
import Signin from './Signin'
import Signup from './Signup'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </Router>
    }
}

export default Routes