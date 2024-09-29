import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Adminportal from './Components/Admin/Adminportal'
import Userportal from './Components/Users/Userportal'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route element={<LandingPage/>} path='/'/>
    <Route element={<Adminportal/>} path='/adminportal/*'/>
    <Route element={<Userportal/>} path='/userportal/*'/>
  </Routes>
  </BrowserRouter>
  </>

  )
}             

export default App