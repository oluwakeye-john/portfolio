import React from "react"
import './Projects.scss'
import Reveal from "react-reveal/Zoom"
import HireButton from "../HireButton/HireButton"
const projects = [
    {
        name: "Blog",
        description: "My personal blog built with react js and gatsby",
        url: "https://adoring-mccarthy-84acce.netlify.com"
    },
    {
        name: "Viz Movies",
        description: "A movie database website built with react.",
        url: "https://vizmovies.netlify.com"
    },
    {
        name: "Face Scout",
        description: "A face detection website built with Clarifai API",
        url: "https://facescout.netlify.com"
    },

    {
        name: "Giving Hilfe",
        description: "A charity website integrated with stripe payment platform",
        url: "https://givinghilfe.org"
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
                        <Reveal key={index}>
                            <div className="col-lg-6 mb-4">
                                <div className="container project-cards">
                                    <h4>{project.name}</h4>
                                    <br />
                                    <p>{project.description}</p>
                                    <a href={project.url} target="_blank" className="btn visit-button btn-sm">Visit Site</a>
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