import React from "react"
import './Footer.scss'
import FooterSVG from '../../images/footer.svg'

const Footer = () => (
    <footer className="" style={{backgroundImage: `url(${FooterSVG})`}}>
        <div className="container">
            <h4>Oluwakeye John</h4>
            <br />
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <br />
        </div>
    </footer>
)

export default Footer