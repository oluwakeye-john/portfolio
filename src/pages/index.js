import React from "react"
import '../components/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing/Landing"
import Contact from "../components/Contact/Contact"
import Service from "../components/Service/Service"
import Project from "../components/Projects/Projects"

const IndexPage = ()  => (
    <Layout>
        <SEO title="Home" />
        <Landing />
        <div className="container-fluid">
        <hr /><br />
        <Service />
        <hr /><br />
        <Project />
        <hr /><br />
        <Contact />
        </div>
    </Layout>
)

export default IndexPage
