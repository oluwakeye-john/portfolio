import Anim from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Rotate from "react-reveal/Reveal"
import React from "react"
import './Landing.scss'

import Im1 from "../../images/overlay.svg"
import Im2 from "../../images/portfolio1_no_bg.svg"
import HireButton from "../HireButton/HireButton"

const Landing = () => (
    <div className="mainIntro" style={{backgroundImage: `url(${Im1})`}}>
        <div className="container">
            <div className="row" >
                <div className="col-lg-5">
                    <Anim>
                        <h1 className="main-heading" >Hi There!</h1>
                    </Anim>
                    <br />
                    <Anim>
                        <div>
                        <h1 className="main-subheading" >I'm Oluwakeye John</h1>
                        <h1 className="main-subheading">I'm a Full-Stack Web developer</h1>
                        </div>
                        </Anim>
                    <br /><br />
                    <Bounce>
                        <HireButton />
                    </Bounce>
                    <br /><br />
                </div>
                <div className="col-lg-7" >
                    <div className="container">
                        <Rotate>
                            <img alt="dev logo" src={Im2} className="img-fluid"/>
                        </Rotate>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    </div>
)

export default Landing