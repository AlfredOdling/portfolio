import React, { Component } from 'react'
import getProjectContent from './ProjectsContent'
import 'hover.css'
import left from './assets/left.svg'
import right from './assets/right.svg'
import { isMobile } from 'react-device-detect'
const $ = require('jquery')

export default class MenuBoxProjectsMobile extends Component {
   state = {
      projects: [
         'koala',
         'loco',
         'hikikomori',
         'freshCoast',
         'digiexam',
         'tremory',
         'phocus',
         'badrumsboden',
         'cinnober',
      ],
      currentIndex: 0,
      project: 'koala',
   }

   clickArrow = rl => {
      const { toggleContent } = this.props
      const { currentIndex, projects } = this.state
      let _currentIndex = currentIndex

      if (rl === 'left' && currentIndex !== 0) {
         _currentIndex -= 1
      } else if (rl === 'right') {
         _currentIndex += 1
      }

      if (_currentIndex < projects.length) {
         const project = projects[_currentIndex]

         this.setState({
            currentIndex: _currentIndex,
            project,
         })

         toggleContent(project)
      }
   }

   nextButtons = () => {
      const { project, projects, currentIndex } = this.state
      const { goTo } = this.props

      return (
         <div id="mobile-arrows-container">
            <div id={project} id="mobile-arrows">
               <div onClick={() => this.clickArrow('left')}>
                  <img id='imgId' src={left} alt='img' />
               </div>

               <p>{currentIndex + 1 + '/' + projects.length}</p>

               <div onClick={() => this.clickArrow('right')}>
                  <img id='imgId' src={right} alt='img' />
               </div>
            </div>

            <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={() => goTo()}>
               <img style={{ width: '14%', marginRight: '7px' }} id='imgId' src={left} alt='img' />
               <p>go back</p>
            </div>
         </div>
      )
   }

   render() {
      return (
         <div className="menuBox">
            {this.nextButtons()}
         </div>
      )
   }
}
