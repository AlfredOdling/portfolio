import './styles/css/app.css'
import React from 'react'
import { Intro, Contacts, WhatIDo } from './StartComponents'
import MenuBox from './MenuBox'
const $ = require('jquery')

export default class Start extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contentItemID: 'intro',
    }
  }

  componentDidMount() {
    this.toggleContent('intro')
    this.calculateMouseDistance()
  }

  calculateMouseDistance = () => {
    let { mX, mY } = 0
    let $element = $('#start')

    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)))
    }

    $(document).mousemove(e => {
      mX = e.pageX
      mY = e.pageY
      let distance = calculateDistance($element, mX, mY)
      let ratio = (1 + Math.log(1 - (distance / window.innerWidth)))

      let opacity = ratio < 0.15 ? 0.15 : ratio

      $("#start").animate({ opacity }, 0)
    })
  }

  toggleContent = contentItemID => {
    // this.animateBox()
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

  showContent = () => {
    const { contentItemID } = this.state

    let component =
      contentItemID === 'intro' ? < Intro />
      : contentItemID === 'whatIdo' ? < WhatIDo />
      : contentItemID === 'contacts' ? <Contacts />
      : ''

    return component
  }

  render() {
    return (
      <div id='home' className='innerContainer'>
        {this.showContent()}
        <MenuBox toggleContent={this.toggleContent} />
      </div>
    )
  }
}
