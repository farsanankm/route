import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

import BasicExample from './Navbar'


function Layout() {
  return (
    <>
      <BasicExample/>
       <Outlet/>
      
    </>

  )
  
}

export default Layout