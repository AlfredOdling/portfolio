import React from 'react'
import Start from './Start'
import Projects from './Projects'
import left from './assets/left.svg'
import right from './assets/right.svg'

const WebView = ({ toggled, toggle }) => {
   return (
      <div className='back'>
         <div className='container'>
            {
               toggled ?
                  <Projects />
                  :
                  <Start />
            }
         </div>
         <div id="toggleButton" onClick={() => toggle()}>
            {
               toggled ?
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                     <img style={{ width: '11%', marginRight: '7px' }} id='imgId' src={left} alt='img' />
                     <p>back to intro</p>
                  </div>
                  :
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                     <p style={{ width: '100%' }}>some of my projects</p>
                     <img style={{ width: '7.5%' }} id='imgId' src={right} alt='img' />
                  </div>
            }
         </div>
      </div>
   )
}

export default WebView