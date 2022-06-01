import React from 'react'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <Portfolio></Portfolio>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default App