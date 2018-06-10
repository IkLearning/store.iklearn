import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import history from './components/history/History'
import { Provider } from 'react-redux'
import store from './store/index'
import registerServiceWorker from './registerServiceWorker'
require('dotenv').config()


ReactDOM.render((
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    
), document.getElementById('root'))
registerServiceWorker()