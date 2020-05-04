import React from "react"
import HireButton from "../HireButton/HireButton"
import './service.scss'
import Zoom from "react-reveal/Zoom"

const services = [
    {
        name: "Fast",
        icon: "fa-bolt",
        description: "Fast load times and lag free interaction, my highest priority."
    },
    {
        name: "Responsive",
        icon: "fa-mobile",
        description: "My layouts will work on any device, big or small"
    },
    {
        name: "Intuitive",
        icon: "fa-laptop",
        description: "Strong preference for easy to use, intuitive UX/UI."
    },
    {
        name: "Dynamic",
        icon: "fa-desktop",
        description: "Websites don't have to be static, I love making pages come to life."
    },
]

const Service = () => (
    <div className="container text-center" id="serviceSection">
        <h3 className="text-muted">Services</h3>
        <br />
        <div className="row">
            {
                services.map((service, index) => (
                    <div className="col-lg mb-5" key={index}>
                        <Zoom >
                            <div className="serviceMain">
                                <span className={`fas ${service.icon} fa-3x serviceIcon`}> </span>
                                <br /><br />
                                <h4 className="text-center">{service.name}</h4>
                                <br />
                                <p>{service.description}</p>
                            </div>
                        </Zoom>
                    </div>
                ))
            }
        </div>
        <HireButton />
    </div>
)

export default Service