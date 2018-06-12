import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import history from './components/history/History'
import { Provider } from 'react-redux'
import store from './store/index'
import registerServiceWorker from './registerServiceWorker'
require('dotenv').config()


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
    
), document.getElementById('root'))
registerServiceWorker()