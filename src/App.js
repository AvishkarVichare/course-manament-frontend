import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './Pages/AdminLogin'
import AdminSignup from './Pages/AdminSignup'

const App = () => {
  return (
    <>
    
    <Routes>
        <Route exact path='/admin/login' element={<AdminLogin/>} />
        <Route exact path='/admin/signup' element={<AdminSignup/>} />
    </Routes>

    </>
    )
}

export default App