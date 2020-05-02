import Anim from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Rotate from "react-reveal/Reveal"
import React from "react"
import './Landing.scss'

import Im1 from "../../images/overlay.svg"
import Im2 from "../../images/dev.svg"

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
                        <h4 className="main-subheading" >I'm John and I'm a JAMStack developer</h4>
                    </Anim>
                    <br /><br />
                    <Bounce>
                        <button className="btn rounded-pill hireButton" >Hire Me</button>
                    </Bounce>
                    <br /><br />
                </div>
                <div className="col-lg-7" >
                    <div className="container">
                        <Rotate>
                            <img alt="dev logo" src={Im2}/>
                        </Rotate>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    </div>
)

export default Landing