import React from 'react'
import phocusLogo from '../assets/phocusLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const Phocus = {
   images: [
     { src: require('../assets/images/phocus/1.jpg') }
   ],
   text: (
      <div className='box'>
      <ReactVivus
         id="phocusLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: phocusLogo,
         }}
         style={{ width: '290px' }}
      />
      <div className="text small">
      <p>
      In the summer of 2017 I worked with a startup called Phocus. My job
      was to develop a new landing page and then implement and launch the
      site.
     </p>
     <br />
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://ibb.co/hO05d7">full image / </a>
     <a>see photo</a>
     </div>
     </div>
   )
 }

 export default Phocus
 