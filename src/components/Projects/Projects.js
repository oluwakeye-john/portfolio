import React from "react"
import "./Projects.scss"
import Reveal from "react-reveal/Zoom"
import HireButton from "../HireButton/HireButton"
const projects = [
  {
    name: "Eaveswall",
    description: "Eaveswall is a univeristy blogging platform.",
    url: "https://eaveswall.com",
  },
  {
    name: "Ecommerce",
    description: "A blazing fast shopping website with integrated payment",
    url: "https://oluwakeye-ecommerce.netlify.com",
  },
  {
    name: "Chat App",
    description: "A real-time chat app built with nodejs, socketio.",
    url: "https://oluwakeye-chat.herokuapp.com",
  },
  {
    name: "Video Chat App",
    description:
      "A video chat application built with webRTC, socket.io and nodejs",
    url: "https://lens-chat.netlify.app",
  },
]

const Project = () => {
  return (
    <div className="container text-center">
      <h3 className="">Projects</h3>
      <br />

      <div className="row">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h4 className=" card-title">{project.name}</h4>
                  <br />
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn visit-button"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <br />
      <HireButton />
      <br />
      <br />
    </div>
  )
}

export default Project

{
  /* <div className="container project-cards">
                                    <h4 className="text-muted">{project.name}</h4>
                                    <br />
                                    <p>{project.description}</p>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn visit-button btn-sm">Visit Site</a>
                                </div> */
}
