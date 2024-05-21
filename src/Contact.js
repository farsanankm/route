import React from 'react'
import './Contact.css'
import image from '../src/images/contact.jpg'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="x">
      <div className="c">
      <h1 style={{fontFamily:"inherit", fontSize:"110%"}}> Mob NO:9946949365</h1>
    <p style={{fontFamily:"inherit", fontSize:"110%"}}>Email Id:<Link style={{color:'burlywood'}}>farsanankm24@gmail.com</Link></p>
      </div>
      <div className='i'>
        <img src={image} alt="contact" width={"150px"} />
      </div>
     
    </div>
  )
}

export default Contact