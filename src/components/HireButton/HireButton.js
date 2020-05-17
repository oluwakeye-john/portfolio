import React from "react"
import './HireButton.scss'
import Bounce from "react-reveal/Bounce"

const HireButton = () => (
    <Bounce>
        <a style={{ borderRadius: "0" }} href="#contactSection" className="btn hireButton" >Hire Me</a>
    </Bounce>
)

export default HireButton