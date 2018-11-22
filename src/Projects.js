import React, { Component } from 'react'
import { MenuBoxProjects, Koala, Loco, Hikikomori, FreshCoast, Digiexam, Tremory, Phocus, Badrumsboden, Cinnober } from './Stateless'
const $ = require('jquery')

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItemID: 'koala',
        }
    }

    componentDidMount() {
        this.toggleContent('koala')
    }

    toggleContent = menuItemID => {
        if (this.state.menuItemID !== menuItemID) {
            this.animateBox()
        }

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

    animateBox = () => {
        // $('.box').removeClass('animated')

        // $('.box').addClass('animated')
        $(".box").animate({ opacity: '0.25' }, 0);
        $(".box").animate({ opacity: '1' }, 750);

    }

    showContent = () => {
        const { menuItemID } = this.state

        let component =
            menuItemID === 'koala' ? < Koala />
            : menuItemID === 'loco' ? < Loco />
            : menuItemID === 'hikikomori' ? < Hikikomori />
            : menuItemID === 'freshCoast' ? < FreshCoast />
            : menuItemID === 'digiexam' ? < Digiexam />
            : menuItemID === 'tremory' ? < Tremory />
            : menuItemID === 'phocus' ? < Phocus />
            : menuItemID === 'badrumsboden' ? < Badrumsboden />
            : menuItemID === 'cinnober' ? < Cinnober />
            : ''

        return component
    }

    render() {
        return (
            <div className="innerContainer" id="projects">
                <MenuBoxProjects toggleContent={this.toggleContent} />
                {this.showContent()}
            </div>
        )
    }
}