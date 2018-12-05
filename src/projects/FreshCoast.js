import React from 'react'
import freshcoastLogo from '../assets/freshcoastLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const FreshCoast = {
   images: [
     { src: require('../assets/images/fresh/1.png') },
     { src: require('../assets/images/fresh/2.png') }
   ],
   text: (
      <div className='box'>
      <ReactVivus
         id="freshcoastLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: freshcoastLogo,
         }}
         style={{ width: '200px' }}
      />
      <div className="text small">
      <p>
      During a course in school, we developed a service for a company that sells icecream during the summers.
      </p>
     <br />
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=se.freshcoast.icecreamboats&hl=sv">app store / </a>
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/AlfredOdling/IcecreamBoats">github project </a>
     </div>
     </div>
   )
 }

 export default FreshCoast