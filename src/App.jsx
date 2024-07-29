import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main.jsx'

import{ Article, Brand, Cta, Feature, Navbar } from './components'
import{ Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
