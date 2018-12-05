import React from 'react'
import digiexamLogo from '../assets/digiexamLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

const DigiExam = {
   images: [],
   text: (
      <div className='box'>
      <ReactVivus
         id="digiexamLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: digiexamLogo,
         }}
         style={{ width: '220px' }}
      />
      <div className="text small">
      <p>
      The summer of ‘18 I worked as a developer at DigiExam in Stockholm.
      I learnt how to use the front-end framework AngularJS.
     </p>
     </div>
     <br/>
   </div>
   )
 }

 export default DigiExam