import React from 'react'
import locoLogo from '../assets/locoLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

 const Loco = {
  images: [
    { src: require('../assets/images/locoApp/locoApp.png') },
  ],
  text: (
    <div className='box'>
    <ReactVivus
       id="locoLogo"
       className='svgLogo'
       option={{
          ..._option,
          file: locoLogo,
       }}
       style={{ width: '250px' }}
    />
    <div className="text small">
    <p>
    This is a small application built during a course in school. 
    The focus was on the process of product development; business requirements, UX, lo-fi and hi-fi prototyping. 
  </p>
  <br />

  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://admiring-poincare-49bf29.netlify.com/">application / </a>
  <a
  rel="noopener noreferrer"
  target="_blank"
  href="https://github.com/AlfredOdling/LocoApp">github project / </a>
  <a>see photo</a>
  </div>
 </div>
  )
}

 export default Loco