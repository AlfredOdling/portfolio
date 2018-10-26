import React from 'react'
import Card from "./Card";
import { getCardImages } from './Utils/getContent'

export default class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: getCardImages()
    }
  }

  renderCards = () => {
    const { cards } = this.state
    const { toggleContent } = this.props

    let cardsToRender = cards.map(item => {
      const { id, src } = item
      
      return <Card toggleContent={toggleContent} id={id} key={id} src={src}/>
    })
    return cardsToRender
  }

  render() {
    return (
      <div id="cardContainer">
        {this.renderCards()}
      </div>
    )
  }
}
