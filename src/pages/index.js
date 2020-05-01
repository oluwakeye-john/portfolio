import React from "react"
import '../components/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import Anim from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"
import Intro from "../components/intro"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <div className="mainIntro">
            <div className="container">
                <Intro />
                <hr /><br />
            </div>
        </div>
    </Layout>
)

export default IndexPage
