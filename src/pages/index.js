import React from "react"
import '../components/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing/Landing"
import Contact from "../components/Contact/Contact"
import Service from "../components/Service/Service"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Landing />
        <br />
        <Service />
        <br /><br />
        <Contact />

    </Layout>
)

export default IndexPage
