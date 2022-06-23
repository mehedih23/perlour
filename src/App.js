import React from 'react'
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Home from './components/Home'
import Milestones from './components/Milestones'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Video from './components/Video'
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      initial="hidden"
      animate='show'
    >
      <Home></Home>
      <Services></Services>
      <Portfolio></Portfolio>
      <Milestones></Milestones>
      <Blog></Blog>
      <Video></Video>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Skills></Skills>
      <Contacts></Contacts>
      <Footer></Footer>

      <ScrollToTop></ScrollToTop>
    </motion.div>
  )
}

export default App