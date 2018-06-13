import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './containers/Main'
import Footer from './components/footer/Footer'
import ProductActions from './actions/product'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ProductActions.fetchProducts()

export default App
