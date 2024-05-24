import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import RentCarScreen from './screens/RentCarScreen'
import DistributionScreen from './screens/DistributionScreen'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/rent-car' element={<RentCarScreen/>} />
        <Route path='/destribution' element={<DistributionScreen/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App