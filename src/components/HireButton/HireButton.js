import React from "react"
import './HireButton.scss'
import Reveal from "react-reveal/Reveal"

const HireButton = () => (
    <Reveal>
        <a style={{ borderRadius: "0" }} href="#contactSection" className="btn hireButton" >Hire Me</a>
    </Reveal>
)

export default HireButton