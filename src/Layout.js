import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import './Layout.css'

import BasicExample from './Navbar'


function Layout() {
  return (
    <>
    <div className="K">
       <BasicExample/>
       <Outlet/>
    </div>
      {/* <BasicExample/>
       <Outlet/> */}
      
    </>

  )
  
}

export default Layout