import './styles/css/app.css'
import React from 'react'
import Cards from './Cards'
import IntroSection from './IntroSection';
import Footer from './Footer';
import CardContent from './CardContent';
const $ = require('jquery')

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showContent: false,
      expanded: false,
      contentId: '',
    }
  }

  toggleContent = (contentId, back) => {
    if (back) {
      $(document).ready(function () {
        $('html, body').animate({
          scrollTop: $('div#'+contentId+'_').offset().top - 65
        }, 200)
      })
    } else {
      $(document).ready(function () {
        $('html, body').animate({
          scrollTop: $('div.moreInfoContainer').offset().top - 65
        }, 200)
      })
    }

    this.setState(prevState => {
      return {
        showContent: !prevState.showContent,
        expanded: !prevState.expanded,
        contentId,
      }
    })
  }

  render() {
    const { showContent, contentId } = this.state

    return (
      <div>
        {
          showContent ?
          <CardContent toggleContent={this.toggleContent} id={contentId} />
          :
          <div>
           <IntroSection />
            <Cards toggleContent={this.toggleContent} />
            <Footer />
          </div>
        }
      </div>
    )
  }
}
