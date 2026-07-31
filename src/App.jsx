import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductDetail from './pages/ProductDetail'
import Success from './pages/Success'
import Orders from './pages/Orders'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/productdetail/:id/' element={<ProductDetail/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </>
  )
}

export default App