import React, { Component } from 'react'
const $ = require('jquery')

export const Intro = () => (
   <div id="intro" className='box'>
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
)

export const Contacts = () => (
   <div id="contacts" className='box'>
      <h2>contact & links</h2>
      <div className="text">
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

const FullStack = () => (
   <div className="text small">
      <p>I have been working with software development since 2014. </p>
      <br />
      <p>During the years I’ve done projects in different languages and frameworks such as C, Java, JavaScript, React, AngularJS, Swift and more.</p>
      <br />
      <p>React / React Native has for me proved to be the best tool for rapid development and is my framework of choise.</p>
   </div>
)

const Service = () => (
   <div className="text small">
      <p>I have been working with software development since 2014. </p>
      <br />
   </div>
)

const showContent = menuItemID => {
   let component =
      menuItemID === 'fullstack' ? < FullStack />
         : menuItemID === 'service' ? < Service />
            : ''

   return component
}

export class WhatIDo extends Component {
   state = {
      menuItemID: 'fullstack',
   }

   componentDidMount() {
      this.toggleMenu('fullstack')
   }

   toggleMenu = menuItemID => {
      this.setState(prevState => {
         if (menuItemID) {
            $('#' + prevState.menuItemID + '.skill').removeClass('checked')
         }
         $('#' + menuItemID + '.skill').addClass('checked')

         return {
            menuItemID,
         }
      })
   }

   render() {
      const { menuItemID } = this.state
      return (
         <div id="whatIDo" className='box' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>what I do</h2>

            {showContent(menuItemID)}

            <div className='pickSkill'>
               <div className='skill' id="fullstack" onClick={() => this.toggleMenu('fullstack')}>
                  <p >full stack</p>
                  <p>development</p>
               </div>

               <div className='skill' id="service" onClick={() => this.toggleMenu('service')}>
                  <p>service</p>
                  <p>design</p>
               </div>
            </div>
         </div>
      )
   }
}
