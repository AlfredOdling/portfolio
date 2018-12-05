import './styles/css/app.css'
import React from 'react'
import { isMobile } from 'react-device-detect'
import MobileView from './MobileView'
import WebView from './WebView'
const $ = require('jquery')

export default class App extends React.Component {
  state = { toggled: false }

  toggle = () => {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }))
  }

  componentDidMount() {
    if (isMobile) {
      $(".text.small").addClass("isMobile")
    }
  }

  render() {
    const { toggled } = this.state

    return (
      <div>
        {
          isMobile ?
            <MobileView toggled={toggled} toggle={this.toggle} />
            :
            <WebView toggled={toggled} toggle={this.toggle} />
        }
      </div>
    )
  }
}

// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

// export default class App extends React.Component {
//   state = { toggled: false }

//   toggle = () => {
//     this.setState(prevState => ({
//       toggled: !prevState.toggled
//     }))
//   }

//   closeFullScreen = () => { 
//     console.log('sdfdsfsdftoggled');
//     this.toggle()
//   }

//   render() {
//     const images = [
//       {
//         original: 'http://placekitten.com/200/300',
//         thumbnail: 'http://placekitten.com/20/30',
//       },
//       {
//         original: 'http://placekitten.com/200/300',
//         thumbnail: 'http://placekitten.com/20/30',
//       },
//       {
//         original: 'http://placekitten.com/200/300',
//         thumbnail: 'http://placekitten.com/20/30',
//       },
//     ]
//     const { toggled } = this.state
//     console.log('toggled', toggled);

//     return (
//       <div style={{ width: '50vh' }}>
//         <button onClick={() => this.toggle()} title="hej" />
//         {
//           toggled ?
//             <ImageGallery closeFullScreen={this.closeFullScreen} showPlayButton={false} items={images} />
//             :
//             []
//         }
//       </div>
//     );
//   }

// }