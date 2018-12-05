import React from 'react'
import cinnoberLogo from '../assets/cinnoberLogo.svg'
import ReactVivus from 'react-vivus'

let _option = {
   type: 'sync',
   animTimingFunction: 'EASE',
   pathTimingFunction: 'EASE',
   duration: 70,
 }

  const Cinnober = {
   images: [],
   text: (
      <div className='box'>
      <ReactVivus
         id="cinnoberLogo"
         className='svgLogo'
         option={{
            ..._option,
            file: cinnoberLogo,
         }}
         style={{ width: '260px' }}
      />
      <div className="text small">
      <p>
      I worked as an frontend developer for the JPX (Japan Exchange Group)
      trading GUI at Cinnober the summer of 2016. Here I worked with super
      talanted developers that taught me to develop in React.
     </p>
     </div>
     </div>
   )
 }

 export default Cinnober