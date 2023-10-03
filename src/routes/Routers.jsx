import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'


import { Routes, Route } from 'react-router-dom'
import DoctorDetailsOne from '../pages/Doctors/DoctorDetailsOne'
import DoctorDetails from '../pages/Doctors/DoctorDetailsTwo'
import DoctorDetailsThree from '../pages/Doctors/DoctorDetailsThree'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/doctors' element={<Doctors/>} />
    <Route path='/01' element={<DoctorDetailsOne />} />    
    <Route path='/02' element={<DoctorDetails />} />
    <Route path='/03' element={<DoctorDetailsThree />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />
  </Routes>
   

}

export default Routers;
