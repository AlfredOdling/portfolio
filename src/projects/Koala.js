import React from 'react'
import koalaLogo from '../assets/koalaLogo.svg'
import ReactVivus from 'react-vivus'
import { isMobile } from 'react-device-detect'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const Koala = {
   images: [
     { src: require('../assets/images/koala/SplashScreen.png') },
     { src: require('../assets/images/koala/Discover.png') },
     { src: require('../assets/images/koala/Profile.png') },
     { src: require('../assets/images/koala/OtherProfile.png') },
   ],
   text: (
     <div className='box'>
       <ReactVivus
         start='manual'
         id="koalaLogo"
         className='svgLogo'
         option={{
           ..._option,
           file: koalaLogo,
         }}
         style={{ width: '250px' }}
       />

       <div className="text small">
         <p>
           I built an interactive prototype and is underway with a MVP for a startup.
           It is build using React Native with a MySQL backend in node. All the text, 
           names and logos are placeholders.
       </p>
       <br/>
         <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://sketch.cloud/s/GJqGD/aLDxwz/play">interactive prototype / </a>
         <a
           rel="noopener noreferrer"
           target="_blank"
           href="https://github.com/AlfredOdling/StartApp">github project / </a>
        <a>see photos</a>
       </div>
     </div>
   )
 }

 export default Koala