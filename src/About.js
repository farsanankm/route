import React from 'react'
import './About.css'
import pho from '../src/images/7712573.png'

function About() {
  return (
    <div className="u ">

      <div className="a1">
        <div className="q">
        <p><h1 style={{fontFamily:"-moz-initial",textAlign:"center",paddingRight:"100px"}}>DO YOU KNOW WHO AM I?....</h1></p>
       <p style={{paddingRight:"100px"}}>HEYYY EVERYONE....IAM FARSANA ABDUL LATHEEF FROM KERALA,INDIA.
       IAM CURRENTLY PERFORMING AN INTERSHIP IN SOFTCRONICS.
       I HAVE RECENTLY COMPLETED MY DEGREE FROM EMEA ARTS AND SCIENCE COLLAGE KONDOTTY IN ENGLISH LANGUAGE AND LITERATUFRE.
       I TOOK A 6 MONTHS BREAK FROM MY ACADEMIC STREAM TO MAKE A SELF STUDY ABOUT MY IT MIND AND THIS LEAD ME TO BE A IT PROFFESIONAL</p>
       <p>
       <ul >
        <h2 style={{paddingTop:"30px", paddingBottom:"20px"}}>Apart from coding, some other activities that I love to do!</h2>
        <li style={{fontSize:"130%"}}>Travelling</li>
        <li  style={{fontSize:"130%"}}>Entertaining</li>
        <li  style={{fontSize:"130%"}}>Creating personal websites and blogs</li>
       </ul>
       
       </p>
        </div>
        <div className='ai'>
          <img  src={pho} width={"400px"} style={{float:"right"}}/>
        </div>
      
      </div>
      <div className='aa'>

      </div>
       <div className='as'>

       </div>
    </div>
  )
}

export default About