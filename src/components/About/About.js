import React from "react"
import Me from '../../images/john3.jpg'
import HireButton from "../HireButton/HireButton"
import './About.scss'

const About = () => (
    <div className="container text-center about-outer-wrapper" id="aboutSection">
        <div className="row">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-4">
                <img src={Me} className="img-fluid rounded about-image" />
                <br /><br />
            </div>
            <div className="col-lg-4 text-left about-inner-wrapper">
                <h3 className="text-muted">About Myself</h3>
                <br />
                <div className="mr-4 text-muted about-key">
                    <p>Name </p>
                    <p>Address </p>
                    <p>Hobbies </p>
                </div>
                <div className="about-value">
                    <p>Oluwakeye John</p>
                    <p>Ibadan, Nigeria</p>
                    <p>Cracking jokes</p>
                </div>
                <br /><br />
                <HireButton />
            </div>
        </div>
        <br />
    </div>
)

export default About