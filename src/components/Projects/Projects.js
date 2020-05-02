import React from "react"
import './Projects.scss'
import Reveal from "react-reveal/Zoom"
import HireButton from "../HireButton/HireButton"
const projects = [
    {
        name: "Blog",
        description: "My personal blog built with react js and gatsby",
        url: "https://google.com"
    },
    {
        name: "Viz Movies",
        description: "This is a blog",
        url: "https://google.com"
    },
    {
        name: "Face Scout",
        description: "This is a blog",
        url: "https://google.com"
    },

    {
        name: "Giving Hilfe",
        description: "This is a blog",
        url: "https://google.com"
    }
]

const Project = () => {
    return(
        <div className="container text-center" id="projectSection">
            <h3 className="text-muted">Projects</h3>
            <br />

            <div className="row">
                {
                    projects.map((project, index) => (
                        <Reveal>
                            <div key={index} className="col-lg-6 mb-4">
                                <div className="container project-cards">
                                    <h4>{project.name}</h4>
                                    <br />
                                    <p>{project.description}</p>
                                    <button className="btn visit-button btn-sm">Visit Site</button>
                                </div>
                            </div>
                        </Reveal>
                    ))
                }
            </div>
            <br />
            <HireButton />
            <br />
        </div>
    )
}

export default Project