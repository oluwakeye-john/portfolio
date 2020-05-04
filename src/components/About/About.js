import React from "react"
import './About.scss'
import Skills from "../Skills/Skills"
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const About = () => {
    const data = useStaticQuery(graphql`
    {
            file(relativePath: { eq: "john3.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
    }
        `
    )

    return (
        <div className="container text-center about-outer-wrapper" id="aboutSection">
            <h3 className="text-muted">About Myself</h3>
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <br/><br/>
                    <Image fluid={data.file.childImageSharp.fluid} alt="Oluwakeye John"  className="img-fluid rounded about-image"/>
                    <br/><br/>
                    <h4 className="text-muted">Who's this guy?</h4>
                    <br/>
                    <p style={{ padding: "10px 0", lineHeight: "30px" }}>
                        I'm a Full Stack developer and I currently reside in Ibadan, Nigeria.
                        <br/>
                        I have serious passion for fast, dynamic and intuitive websites.
                        <br/>
                        I love writing. I also read novels a lot.
                    </p>
                    <br/><br/>
                </div>
                <div className="col-lg-6 text-left about-inner-wrapper">
                    <Skills/>
                </div>
            </div>
            <br/>
        </div>
    )
}



export default About