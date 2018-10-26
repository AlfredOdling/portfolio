import React from 'react'

export default class Card extends React.Component {

  render() {
    const { id, src, toggleContent } = this.props

    return (
      <div
        onClick={() => toggleContent(id)}
        className="hvr-shrink cards" id={id + '_'}>
        <img
          id={id}
          className="icons"
          src={require('./assets/' + src)}
          alt="img" />
      </div>
    )
  }
}