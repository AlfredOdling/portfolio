import React from 'react'
import tremoryLogo from '../assets/tremoryLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const Tremory = {
   images: [
     { src: require('../assets/images/tremory/1.png') },
     { src: require('../assets/images/tremory/2.png') },
     { src: require('../assets/images/tremory/3.png') },
     { src: require('../assets/images/tremory/4.png') },
     { src: require('../assets/images/tremory/5.png') },
     { src: require('../assets/images/tremory/6.png') },
     { src: require('../assets/images/tremory/7.png') }
   ],
   text: (
      <div className='box'>
      <ReactVivus
         id="tremoryLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: tremoryLogo,
         }}
         style={{ width: '200px' }}
      />
      <div className="text small">
      <p>
      During a four month period I was hired as an consultant for a
      startup called Tremory. During this time we focused on the business
      end of things and building a mobile application.
   </p>
     <br />
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/AlfredOdling/TremoryMobile">github project / </a>
     <a>see photos</a>
     </div>
     </div>
   )
 }

 export default Tremory