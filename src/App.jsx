import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import SignupAlert from './components/SignupAlert'
import './App.css'
import FooterHome from './components/FooterHome'
import PopularSearches from './components/PopularSearches'

export default function App() {
  return (
    <div className='app'>
      <Header/>      
      <Home/>
      {/* <SignupAlert/> */}
      <FooterHome/>
      <PopularSearches/>
    </div>
  )
}
