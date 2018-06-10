import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './components/Main'
import Footer from './components/footer/Footer'

class App extends Component {

  addToCart = () => {
    alert('ahihi đồ khó hiểu')
  }

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

export default App
