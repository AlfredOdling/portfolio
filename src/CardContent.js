import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// eslint-disable-next-line
import { getContent } from './Utils/getContent'

export default class CardContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: {
        images: [],
        text: undefined
      }
    }
  }

  componentWillMount() {
    const { id } = this.props

    this.setState({
      content: getContent(id)
    })

    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false)
  }

  handleClick = e => {
    const { toggleContent, id } = this.props
    
    if (!this.node.contains(e.target)) {
      toggleContent(id, true)
    }
  }

  renderSliderImgs = images => {
    let ImgsToRender = images.map((item, i) => {
      return <img className="images" key={i} id={i} src={item.src} alt="img" />
    })

    return ImgsToRender
  }

  render() {
    const { toggleContent, id } = this.props
    const { content } = this.state
    const { images, text } = content

    return (
      <div className="moreInfoContainer" ref={node => this.node = node}>
        <button onClick={() => toggleContent(id, true)}>CLOSE</button>
        <div className="textContainer">{text}</div>
        <Carousel>{this.renderSliderImgs(images)}</Carousel>
      </div>
    )
  }
}
