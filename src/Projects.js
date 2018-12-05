import React, { Component } from 'react'
import MenuBoxProjects, {
    Koala,
    Loco,
    Hikikomori,
    FreshCoast,
    DigiExam,
    Tremory,
    Phocus,
    Badrumsboden,
    Cinnober
} from './MenuBoxProjects'
import { isMobile } from 'react-device-detect'
import MenuBoxProjectsMobile from './MenuBoxProjectsMobile'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const $ = require('jquery')

export default class Projects extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         menuItemID: 'koala',
    //     }
    // }


    state = { toggled: false, menuItemID: 'koala' }

    toggle = () => {
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }))
    }

    closeFullScreen = () => {
        console.log('sdfdsfsdftoggled');
        this.toggle()
    }

    componentDidMount() {
        this.toggleContent('koala')
    }

    toggleContent = menuItemID => {
        this.setState(prevState => {
            if (menuItemID) {
                $('#' + prevState.menuItemID + '.menuRow').removeClass('checked')
            }
            $('#' + menuItemID + '.menuRow').addClass('checked')

            return {
                menuItemID,
            }
        })
    }

    showContent = () => {
        const { menuItemID } = this.state

        let component =
            menuItemID === 'koala' ? < Koala />
                : menuItemID === 'loco' ? < Loco />
                    : menuItemID === 'hikikomori' ? < Hikikomori />
                        : menuItemID === 'freshCoast' ? < FreshCoast />
                            : menuItemID === 'digiexam' ? < DigiExam />
                                : menuItemID === 'tremory' ? < Tremory />
                                    : menuItemID === 'phocus' ? < Phocus />
                                        : menuItemID === 'badrumsboden' ? < Badrumsboden />
                                            : menuItemID === 'cinnober' ? < Cinnober />
                                                : ''

        return component
    }

    render() {
        const { goTo } = this.props
        const { toggled } = this.state
        const images = [
            {
                original: 'http://placekitten.com/200/300',
                thumbnail: 'http://placekitten.com/20/30',
            },
            {
                original: 'http://placekitten.com/200/300',
                thumbnail: 'http://placekitten.com/20/30',
            },
            {
                original: 'http://placekitten.com/200/300',
                thumbnail: 'http://placekitten.com/20/30',
            },
        ]


        return (
            <div id="projects" className='innerContainer'>
                {
                    isMobile ?
                        []
                        :
                        <MenuBoxProjects toggleContent={this.toggleContent} />
                }
                {this.showContent()}

                    <button onClick={() => this.toggle()} title="hej" />
                    {
                        toggled ?
                            <ImageGallery closeFullScreen={this.closeFullScreen} showPlayButton={false} items={images} />
                            :
                            []
                    }

                {
                    isMobile ?
                        <MenuBoxProjectsMobile goTo={goTo} toggleContent={this.toggleContent} />
                        :
                        []
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