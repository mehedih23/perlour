import React from 'react'
import Blog from './components/Blog'
import Home from './components/Home'
import Milestones from './components/Milestones'
import Portfolio from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Video from './components/Video'

const App = () => {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <Portfolio></Portfolio>
      <Milestones></Milestones>
      <Blog></Blog>
      <Video></Video>

      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default App