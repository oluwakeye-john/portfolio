import React from "react"
import "../components/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing/Landing"
import Contact from "../components/Contact/Contact"
import Service from "../components/Service/Service"
import Project from "../components/Projects/Projects"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <div className="container">
      <hr />
      <br />
      <About />
      <hr id="serviceSection" />
      <br />
      <Service />
      <hr id="projectSection" />
      <br />
      <Project />
      <hr id="contactSection" />
      <br />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
