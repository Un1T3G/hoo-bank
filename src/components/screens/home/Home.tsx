import React from 'react'
import Header from '../../../layout/header/Header'
import Footer from '../../../layout/footer/Footer'
import Intro from './components/intro/Intro'
import AboutUs from './components/about-us/AboutUs'
import Features from './components/features/Features'
import Solution from './components/solution/Solution'
import './Home.scss'
import Counter from './components/counter/Counter'

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Counter/>
      <AboutUs />
      <Features />
      <Solution />
      <Footer />
    </>
  )
}

export default Home
