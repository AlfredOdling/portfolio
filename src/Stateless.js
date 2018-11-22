import React from 'react'
import koalaLogo from './assets/koalaLogo.svg'
import locoLogo from './assets/locoLogo.svg'
import hikikomoriLogo from './assets/hikikomoriLogo.svg'
import freshcoastLogo from './assets/freshcoastLogo.svg'
import digiexamLogo from './assets/digiexamLogo.svg'
import tremoryLogo from './assets/tremoryLogo.svg'
import phocusLogo from './assets/phocusLogo.svg'
import badrumsbodenLogo from './assets/badrumsbodenLogo.svg'
import cinnoberLogo from './assets/cinnoberLogo.svg'
import MtSvgLines from 'react-mt-svg-lines'

export const Intro = () => (
   <div className='box'>
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
   <div className='box'>
      <h2>contacts & resourses</h2>
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
   <div className='box'>
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>During the years I’ve done projects in different languages and frameworks such as C, Java, JavaScript, React, AngularJS, Swift and more.</p>
         <br />
         <p>React / React Native has for me proved to be the best tool for rapid development and is my framework of choise.</p>
      </div>
   </div>
)

const Service = () => (
   <div className='box'>
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
      </div>
   </div>
)

const Ux = () => (
   <div className='box'>

      <div className="text small">
         <br />
         <p>React / UX UX has for me proved to be the best tool for rapid development and is my framework of choise.</p>
      </div>
   </div>
)

const showContent = menuItemID => {
   let component =
      menuItemID === 'fullstack' ? < FullStack />
         : menuItemID === 'service' ? < Service />
            : menuItemID === 'ux' ? <Ux />
               : ''

   return component
}

export const WhatIDo = ({ toggleMenu, menuItemID }) => (
   <div className='box'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         <h2>what I do</h2>

         {showContent(menuItemID)}

         <div className='pickSkill'>
            <div className='skill' id="fullstack" onClick={() => toggleMenu('fullstack')}>
               <p>full stack</p>
               <p>development</p>
            </div>

            <div className='skill' id="service" onClick={() => toggleMenu('service')}>
               <p>service</p>
               <p>design</p>
            </div>

            <div className='skill' id="ux" onClick={() => toggleMenu('ux')}>
               <p>ux</p>
               <p>design</p>
            </div>
         </div>
      </div>
   </div>
)

export const MenuBox = ({ toggleContent }) => {
   return (
      <div className="menuBox">
         <div onClick={() => toggleContent('intro')} id="intro" className="menuRow">
            <p>intro</p> <div className="checkBox" />
         </div>
         <div onClick={() => toggleContent('whatIdo')} id="whatIdo" className="menuRow">
            <p>what I do</p> <div className="checkBox" />
         </div>
         <div onClick={() => toggleContent('contacts')} id="contacts" className="menuRow">
            <p>contacts & resourses</p> <div className="checkBox" />
         </div>
      </div>
   )
}

export const MenuBoxProjects = ({ toggleContent }) => {
   return (
      <div className="menuBox">
         <div onClick={() => toggleContent('koala')} id="koala" className="menuRow">
            <p>koala</p>
         </div>
         <div onClick={() => toggleContent('loco')} id="loco" className="menuRow">
            <p>loco</p>
         </div>
         <div onClick={() => toggleContent('hikikomori')} id="hikikomori" className="menuRow">
            <p>hikikomori</p>
         </div>
         <div onClick={() => toggleContent('freshCoast')} id="freshCoast" className="menuRow">
            <p>fresh coast</p>
         </div>
         <div onClick={() => toggleContent('digiexam')} id="digiexam" className="menuRow">
            <p>digiexam</p>
         </div>
         <div onClick={() => toggleContent('tremory')} id="tremory" className="menuRow">
            <p>tremory</p>
         </div>
         <div onClick={() => toggleContent('phocus')} id="phocus" className="menuRow">
            <p>phocus</p>
         </div>
         <div onClick={() => toggleContent('badrumsboden')} id="badrumsboden" className="menuRow">
            <p>badrumsboden</p>
         </div>
         <div onClick={() => toggleContent('cinnober')} id="cinnober" className="menuRow">
            <p>cinnober</p>
         </div>
      </div>
   )
}

export const Koala = () => (
   <div className='box'>
      <img className='svgLogo' id='koalaLogo' src={koalaLogo} alt='img' />

      <MtSvgLines animate={ true } duration={ 500 }>
      <svg viewBox="0 0 100 100">
        <path stroke="green" strokeWidth="10" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5" />
      </svg>
    </MtSvgLines>
    

      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>koalaLogoko alaLogoko alaLo gokoalaLo gokoala Logokoa laLogokoa.laLogokoalaLo. gokoalaLogok oalaLogo koalaLogoko alaLogo.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Loco = () => (
   <div className='box'>
      <img className='svgLogo' id='locoLogo' src={locoLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Hikikomori = () => (
   <div className='box'>
      <img className='svgLogo' id='hikikomoriLogo' src={hikikomoriLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>hikikomori hikikomori hikikomori loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const FreshCoast = () => (
   <div className='box'>
      <img className='svgLogo' id='freshcoastLogo' src={freshcoastLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Digiexam = () => (
   <div className='box'>
      <img className='svgLogo' id='digiexamLogo' src={digiexamLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Tremory = () => (
   <div className='box'>
      <img className='svgLogo' id='tremoryLogo' src={tremoryLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Phocus = () => (
   <div className='box'>
      <img className='svgLogo' id='phocusLogo' src={phocusLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Badrumsboden = () => (
   <div className='box'>
      <img className='svgLogo' id='badrumsbodenLogo' src={badrumsbodenLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)

export const Cinnober = () => (
   <div className='box'>
      <img className='svgLogo' id='cinnoberLogo' src={cinnoberLogo} alt='img' />
      <div className="text small">
         <p>I have been working with software development since 2014. </p>
         <br />
         <p>loco loco locoloco loco loco loco v vv  loco.</p>
      </div>
      <h3>see photos</h3>
   </div>
)
