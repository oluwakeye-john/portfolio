import React from "react"
import Me from '../../images/john3.jpg'
import HireButton from "../HireButton/HireButton"
import './About.scss'
import Skills from "../Skills/Skills"

const About = () => (
    <div className="container text-center about-outer-wrapper" id="aboutSection">
        <h3 className="text-muted">About Myself</h3>
        <br />
        <div className="row">
            <div className="col-lg-6">
                <br /><br />
                <img src={Me} className="img-fluid rounded about-image" />
                <br /><br />
                <h4 className="text-muted">Who's this guy?</h4>
                <br />
                <p style={{padding: "10px 0", lineHeight: "30px"}}>
                    I'm a Full Stack developer and I currently reside in Ibadan, Nigeria.
                    <br />
                    I have serious passion for fast, dynamic and intuitive websites.
                    <br />
                    I love writing. I also read novels a lot.
                </p>
                <br /><br />
            </div>
            <div className="col-lg-6 text-left about-inner-wrapper">
                <Skills />
            </div>
        </div>
        <br />
    </div>
)


//     <h3 className="text-muted">About Myself</h3>
// <br />
// <div className="mr-4 text-muted about-key">
//     <p>Name </p>
//     <p>Address </p>
//     <p>Hobbies </p>
// </div>
// <div className="about-value">
//     <p>Oluwakeye John</p>
//     <p>Ibadan, Nigeria</p>
//     <p>Cracking jokes</p>
// </div>
// <br /><br />
// <HireButton />
export default About