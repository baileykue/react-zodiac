import React from 'react'

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import background from './background.jpg'

function App() {
  return (
    <div className="background center" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
