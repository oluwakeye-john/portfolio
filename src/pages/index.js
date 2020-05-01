import React from "react"
import '../components/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Intro />
        <br /><br /><br />
    </Layout>
)

export default IndexPage
