import Anim from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Rotate from "react-reveal/Rotate"
import Image from "./image"
import React from "react"
import './intro.scss'

import Im1 from "../images/overlay.svg"

const Intro = () => (
    <div className="mainIntro" >
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
                <div className="col-lg-7">
                    <Image />
                </div>
            </div>
            <br /><br />
        </div>
    </div>
)

export default Intro