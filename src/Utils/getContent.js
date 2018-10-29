import React from 'react'

export const getContent = id => {

  const badrumsboden = {
    images: [
      { src: require('../assets/images/badrumsboden/1.png') },
      { src: require('../assets/images/badrumsboden/2.png') },
      { src: require('../assets/images/badrumsboden/3.png') }
    ],
    text: (
      <div>
        <h>Badrumsboden (2016)</h>
        <p>
          This project involves building a web application in React from
          scratch; UX, backend and frontend development. The application
          consist of a landingpage, adminpage, webshop and a servicepage.
          </p>
        <br />
        <p>
          My classmate Simon Asp and I built this web application during
          period of 10 months and this is my longest project so far.
          </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://badrumsboden.herokuapp.com/"
        >
          Link to the application
        </a>
        <div className="break">
          <p>{'\n'}</p>
          <br />
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/AlfredOdling/BadrumsbodenPublic"
        >
          Project on Github
          </a>
        <br />
        <br />
      </div>
    )
  }

  const tremory = {
    images: [
      { src: require('../assets/images/tremory/1.png') },
      { src: require('../assets/images/tremory/2.png') },
      { src: require('../assets/images/tremory/3.png') },
      { src: require('../assets/images/tremory/4.png') },
      { src: require('../assets/images/tremory/5.png') },
      { src: require('../assets/images/tremory/6.png') },
      { src: require('../assets/images/tremory/7.png') }
    ],
    text: (
      <div>
        <h>Tremory (2017)</h>
        <p>
          During a four month period I was hired as an consultant for a
          startup called Tremory. During this time we focused on the business
          end of things and the technology infrastructure.
               </p>
        <br />
        <p>
          We relied heavily on the books "Lean Startup" by Eric Ries and
          "Hacking Growth" by Sean Ellis & Morgan Brown. So after the business
          design and our value and growth hypothesis formed, I started to
          implement our first experiment and MVP.
               </p>
        <br />
        <p>
          What I built was the mobile version to complement the web
          application. Our requirements was that the application should be
          secure, scalable and fast. I developed the mobile application with
          React Native and implemented everything in Redux and prepared so
          that it should be easily transferred to implement a web application
          in React later on because as of now that technology stack is
          outdated.
               </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/AlfredOdling/TremoryMobile"
        >
          Project on Github
        </a>
        <br />
        <br />
      </div>
    )
  }

  const cinnober = {
    images: [],
    text: (
      <div>
        <h>Cinnober (2016)</h>
        <p>
          I worked as an frontend developer for the JPX (Japan Exchange Group)
          trading GUI at Cinnober the summer of 2016. Here I worked with super
          talanted developers that taught me to develop in React. This is also
          where I learned scrum for the first time.
         </p>
      </div>
    )
  }

  const freshcoast = {
    images: [
      { src: require('../assets/images/fresh/1.png') },
      { src: require('../assets/images/fresh/2.png') }
    ],
    text: (
      <div>
        <h>Freshcoast (2017)</h>
        <p>
          We worked for a company who sells food from a boat during the
          summertime. The service we developed will provide an easier way to
          find customers around them.
               </p>
        <br />
        <p>
          I was responsible for the IT architecture and the UX. The app is
          developed for both Android and iOS using React Native. App is
          available in AppStore.
               </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=se.freshcoast.icecreamboats&hl=sv"
        >
          Link to the app store
        </a>
        <div className="break">
          <p>{'\n'}</p>
          <br />
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/AlfredOdling/IcecreamBoats"
        >
          Project on Github
        </a>
        <br />
        <br />
      </div>
    )
  }

  const hikikomori = {
    images: [
      { src: require('../assets/images/hikikomori/1.png') },
      { src: require('../assets/images/hikikomori/2.png') },
      { src: require('../assets/images/hikikomori/3.png') },
      { src: require('../assets/images/hikikomori/4.png') },
      { src: require('../assets/images/hikikomori/5.png') }
    ],
    text: (
      <div>
        <h>Hikikomori (2016)</h>
        <p>
          This was a project we did during the Interactivity in smart
          enviroments course and the Project Management course. The aim of the
          Hikikomori project was to help young people who are outside society
          to develop and improve their social life.
        </p>
        <br />
        <p>
          We worked with certain requirements and goals to create a prototype
          for some one else to implement.
        </p>
        <br />
      </div>
    )
  }

  const phocus = {
    images: [
      { src: require('../assets/images/phocus/1.jpg') }
    ],
    text: (
      <div>
        <h>Phocus (2017)</h>
        <p>
          In the summer of 2017 I worked with a startup called Phocus. My job
          was to develop a new landing page and then implement and launch the
          site using Wix (because of time restraints).
        </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ibb.co/hO05d7"
        >
          Link to full image
        </a>
        <br />
        <br />
      </div>
    )
  }

  const digiexam = {
    images: [],
    text: (
      <div>
        <h>DigiExam (2018)</h>
        <p>
          The summer of ‘18 I worked as a developer at DigiExam in Stockholm.
          I learnt how to use the front-end framework AngularJS. I also gained experience
          in how it is to work at mid-sized startup and also how it operates businesswise.
         </p>
      </div>
    )
  }

  const koala = {
    images: [
      { src: require('../assets/images/koala/SplashScreen.png') },
      { src: require('../assets/images/koala/Discover.png') },
      { src: require('../assets/images/koala/Profile.png') },
      { src: require('../assets/images/koala/OtherProfile.png') },
    ],
    text: (
      <div>
        <h>Koala (2018)</h>
        <p>
          This is a startup that I and two realtors in Stockholm newly started. 
          As of now we are talking to investors and they are sounding optimistic. 
          I am currently developing the interactive prototype parallel to the first MVP. 
          The interactive prototype is in its first iteration and its main purpose is to 
          convey the idea visually to the investors. The MVP is well underway but there is 
          quite a bit to go before the initial launch. It is build using React Native with 
          a MySQL backend in node. All the text, names and logos are placeholders.
        </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://sketch.cloud/s/GJqGD/aLDxwz/play"
        >
          Link to interactive prototype
        </a>
        <div className="break">
          <p>{'\n'}</p>
          <br />
        </div>
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/AlfredOdling/StartApp"
        >
        Project on Github
      </a>
      <br />
      <br />
      </div>
    )
  }

  const loco = {
    images: [
      { src: require('../assets/images/locoApp/locoApp.png') },
    ],
    text: (
      <div>
        <h>LocoApp (2018)</h>
        <p>
          This is a small application built during a course called “Prototype development for mobile applications”. 
          The goal of this course was to find a problem and build a product that solves that problem. 
          The focus was on the process of product development; business requirements, UX, lo-fi and hi-fi prototyping. 
          Our problem was that it sometimes is hard to remember the rules to party games so we wanted a solution for that. 
          We wanted to build a complete application so we had a narrow scope on our product to just show information about 
          party games with no further functionality.
        </p>
        <br />
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://admiring-poincare-49bf29.netlify.com/"
        >
          Link to application
        </a>
        <div className="break">
          <p>{'\n'}</p>
          <br />
        </div>
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/AlfredOdling/LocoApp"
        >
        Project on Github
      </a>
      <br />
      <br />
      </div>
    )
  }

  const content = {
    badrumsboden,
    tremory,
    cinnober,
    freshcoast,
    hikikomori,
    phocus,
    digiexam,
    koala,
    loco,
  }

  return content[id]
}

export const getCardImages = () => {
  return [
    {
      id: 'loco',
      src: 'loco.svg'
    },
    {
      id: 'koala',
      src: 'koala.png'
    },
    {
      id: 'digiexam',
      src: 'digiexam.png'
    },
    {
      id: 'tremory',
      src: 'tremory.png'
    },
    {
      id: 'phocus',
      src: 'phocus.png'
    },
    {
      id: 'freshcoast',
      src: 'fresh.png'
    },
    {
      id: 'badrumsboden',
      src: 'badrums.png'
    },
    {
      id: 'cinnober',
      src: 'cinnober.png'
    },
    {
      id: 'hikikomori',
      src: 'hikikomori.png'
    }]
}