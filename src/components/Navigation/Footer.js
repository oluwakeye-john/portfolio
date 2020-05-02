import React from "react"
import './Footer.scss'
import FooterSVG from '../../images/footer.svg'
import SocialButtons from "../SocialButtons/SocialButtons"

const Footer = () => (
    <footer className="" style={{backgroundImage: `url(${FooterSVG})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <h4>Oluwakeye John</h4>
                    <br />
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                    <br />
                </div>
                <div className="col-lg-4">

                </div>
                <div className="col-lg-4 text-center">
                    <br />
                    <SocialButtons />
                </div>
            </div>
        </div>
    </footer>
)

export default Footer