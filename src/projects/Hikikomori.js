import React from 'react'
import hikikomoriLogo from '../assets/hikikomoriLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const Hikikomori = {
   images: [
     { src: require('../assets/images/hikikomori/1.png') },
     { src: require('../assets/images/hikikomori/2.png') },
     { src: require('../assets/images/hikikomori/3.png') },
     { src: require('../assets/images/hikikomori/4.png') },
     { src: require('../assets/images/hikikomori/5.png') }
   ],
   text: (
      <div className='box'>
      <ReactVivus
         id="hikikomoriLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: hikikomoriLogo,
         }}
         style={{ width: '250px' }}
      />
      <div className="text small">
      <p>
      This was a project we did during the Interactivity in smart
      enviroments course and the Project Management course. The aim of the
      Hikikomori project was to help young people who are outside society
      to develop and improve their social life.
     </p>
     <br />
     <a>see photos</a>
     </div>
     </div>
   )
 }

 export default Hikikomori