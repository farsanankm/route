import React from 'react'
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import image from '../src/images/home img.jpeg'

function Home() {
  return (
    <div className="h" >
      <div className="b">
      <p>
      <TypeAnimation
          sequence={[
            'heyyyyy..........',
            1000,

            // Same substring at the start will only be typed out once, initially
            // 'My Name is Farsana',
            // 1000, // wait 1s before replacing "Mice" with "Hamsters"
            
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

      </p>
      <p style={{fontSize:'40px'}}>
        I'm farsana nkm
      </p>
      </div>
      <div className="g">
       <img src={image} alt="asdhakhsjdk"  width={"300px"}/>
      </div>
    </div>
  )
}

export default Home