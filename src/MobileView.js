import React, { Component } from 'react'
import Projects from './Projects'
import right from './assets/right.svg'

export default class MobileView extends Component {
   state = { toggled: false }

   goTo = () => {
      console.log(this.state);
      
      this.setState(prev => ({
         toggled: !prev.toggled
      }))
   }

   render() {
      const { toggled } = this.state
      return (
         <div>
            {
               toggled ?
                  <Projects goTo={this.goTo} />
                  :
                  <Start goTo={this.goTo}/>
            }
         </div>
      )
   }

}

const Start = ({ goTo }) => {
   return (
      <div id="mobileContainer">
         <div className="square" id="intro">
            <h2>intro</h2>

            <div className="myName">
               <h1>alfred</h1>
               <h1>ödling</h1>
            </div>

            <div className="text">
               <p style={{ color: '#D0021B' }}>ms.c</p>
               {'\n'}
               <p>interaction</p>
               {'\n'}
               <p>design</p>
               {'\n'}
               <p>student</p>
            </div>
         </div>

         <div className="square">
            <h2>what I do</h2>

            <p style={{ color: '#D0021B' }}>fullstack</p>
            <p style={{ color: '#D0021B', marginBottom: '1.5vw' }}>development</p>
            <div className="text small">
               <p>I have been working with software development since 2014. </p>
               <br />
               <p>During the years I’ve done projects in different languages and frameworks such as C, Java, JavaScript, React, AngularJS, Swift and more.</p>
               <br />
               <p>React / React Native has for me proved to be the best tool for rapid development and is my framework of choise.</p>
            </div>
            <br />

            <p style={{ color: '#D0021B', marginBottom: '1.5vw' }}>service design</p>
            <div className="text small">
               <p>I have been working with software development since 2014. </p>
               <br />
               <p>During the years I’ve done projects in different languages and frameworks such as C, Java, JavaScript, React, AngularJS, Swift and more.</p>
               <br />
               <p>React / React Native has for me proved to be the best tool for rapid development and is my framework of choise.</p>
            </div>
         </div>

         <div className="square">
            <h2>what I've done</h2>

            <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={() => goTo()}>
               <p>some of my projects</p>
               <img style={{ width: '8%', marginLeft: '9px' }} id='imgId' src={right} alt='img' />
            </div>
         </div>

         <div className="square" id="contacts">
            <h2>contact & links</h2>
            <a
               className="footerLinks"
               rel="noopener noreferrer"
               target="_blank"
               href="https://docs.google.com/document/d/1Eh7a5tDj7Rmgv8bmpqJwQdYhHaRN4LHfSTHKoONAcfQ/edit?usp=sharing"
            >
               cv
        </a>

            <a
               className="footerLinks"
               rel="noopener noreferrer"
               target="_blank"
               href="mailto:alfredodling@gmail.com"
            >
               email
        </a>

            <a
               className="footerLinks"
               rel="noopener noreferrer"
               target="_blank"
               href="https://github.com/AlfredOdling"
            >
               github
        </a>

            <a
               className="footerLinks"
               rel="noopener noreferrer"
               target="_blank"
               href="https://www.linkedin.com/in/alfredodling/"
            >
               linkedIn
        </a>

            <a
               className="footerLinks"
               rel="noopener noreferrer"
               target="_blank"
               href="https://www.goodreads.com/review/list/63594929-alfred-dling?shelf=%23ALL%23&view=covers"
            >
               bookshelf
        </a>
         </div>
      </div>
   )
}
