import React from "react"
import '../components/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/Landing/Landing"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Landing />
        <br /><br /><br />
    </Layout>
)

export default IndexPage
