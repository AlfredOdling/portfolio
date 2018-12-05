import React from 'react'
import badrumsbodenLogo from '../assets/badrumsbodenLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const Badrumsboden = {
   images: [
     { src: require('../assets/images/badrumsboden/1.png') },
     { src: require('../assets/images/badrumsboden/2.png') },
     { src: require('../assets/images/badrumsboden/3.png') }
   ],
   text: (
      <div className='box'>
      <ReactVivus
         id="badrumsbodenLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: badrumsbodenLogo,
         }}
         style={{ width: 'width: 280px' }}
      />
      <div className="text small">
      <p>
      This project involves building a web application in React from
      scratch; UX, backend and frontend development. The application
      consist of a landingpage, adminpage, webshop and a servicepage.
      </p>
     <br/>
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://badrumsboden.herokuapp.com/">the application / </a>
     <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/AlfredOdling/BadrumsbodenPublic">github project / </a> 
      <a>see photos</a>
      </div>
     </div>
   )
 }

 export default Badrumsboden