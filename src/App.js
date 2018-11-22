import './styles/css/app.css'
import React from 'react'
import Start from './Start'
import Projects from './Projects'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
      <Projects/>
      </div>
    )
  }
}
