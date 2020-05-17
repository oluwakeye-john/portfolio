import React from "react"
import './Projects.scss'
import Reveal from "react-reveal/Zoom"
import HireButton from "../HireButton/HireButton"
const projects = [
    {
        name: "Blog",
        description: "My personal blog built with react js and gatsby",
        url: "https://oluwakeye-blog.netlify.com"
    },
    {
        name: "Ecommerce",
        description: "A blazing fast shopping website with integrated payment",
        url: "https://oluwakeye-ecommerce.netlify.com"
    },
    {
        name: "Viz Movies",
        description: "A movie database website built with react.",
        url: "https://vizmovies.netlify.com"
    },
    {
        name: "Giving Hilfe",
        description: "A charity website integrated with Square payment platform",
        url: "https://givinghilfe.org"
    }
]

const Project = () => {
    return (
        <div className="container text-center" id="projectSection">
            <h3 className="">Projects</h3>
            <br />

            <div className="row">
                {
                    projects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="col-lg-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className=" card-title">{project.name}</h4>
                                        <br />
                                        <p className="card-text">{project.description}</p>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ borderRadius: "0" }} className="btn visit-button">Visit Site</a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))
                }
            </div>
            <br />
            <HireButton />
            <br /><br />
        </div>
    )
}

export default Project



{/* <div className="container project-cards">
                                    <h4 className="text-muted">{project.name}</h4>
                                    <br />
                                    <p>{project.description}</p>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn visit-button btn-sm">Visit Site</a>
                                </div> */}