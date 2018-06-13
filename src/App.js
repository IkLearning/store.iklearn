import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './containers/Main'
import Footer from './components/footer/Footer'
import { fetchProducts } from './actions/product'

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

console.log(fetchProducts())

export default App
