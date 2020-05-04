import React, { Component } from "react"
import './FixedButtons.scss'

class FixedButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (Number(window.scrollY) > 100) {
                this.setState({
                    scrolled: true
                })
            }
            else {
                this.setState({
                    scrolled: false
                })
            }
        })
    }

    render() {
        return (
            <div>
                <a href="#top" className="scroll-up-button" style={{opacity: this.state.scrolled ? 1 : 0}}>
                    <span className="fas fa-chevron-up"> </span>
                </a>
            </div>
        )
    }
}

export default FixedButtons