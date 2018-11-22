import './styles/css/app.css'
import React from 'react'
import { Intro, Contacts, WhatIDo, MenuBox } from './Stateless'
const $ = require('jquery')

export default class Start extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contentItemID: 'intro',
      menuItemID: 'fullstack',
    }
  }

  componentDidMount() {
    this.toggleContent('intro')
    this.toggleMenu('fullstack')
  }

  toggleContent = contentItemID => {
    this.animateBox()
    this.setState(prevState => {
      if (contentItemID) {
        $('#' + prevState.contentItemID + ' .checkBox').removeClass('checked')
      }
      $('#' + contentItemID + ' .checkBox').addClass('checked')

      return {
        contentItemID,
      }
    })
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

  showContent = () => {
    const { contentItemID, menuItemID } = this.state

    let component =
      contentItemID === 'intro' ? < Intro />
        : contentItemID === 'whatIdo' ? < WhatIDo toggleMenu={this.toggleMenu} menuItemID={menuItemID} />
          : contentItemID === 'contacts' ? <Contacts />
            : ''

    return component
  }

  animateBox = () => {
    // $('.box').removeClass('animated')

    // $('.box').addClass('animated')
    $(".box").animate({ opacity: '0.25' }, 0);
    $(".box").animate({ opacity: '1' }, 750);

  }

  render() {
    // https://github.com/chenglou/react-motion
    return (
      <div id='home' className='innerContainer'>
          {this.showContent()}

        <MenuBox toggleContent={this.toggleContent} />
      </div>
    )
  }
}
