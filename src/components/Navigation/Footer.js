import React from "react"
import './Footer.scss'
import FooterSVG from '../../images/footer.svg'

const Footer = () => (
    <footer className="text-center" style={{backgroundImage: `url(${FooterSVG})`}}>
        <br />
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <br />
    </footer>
)

export default Footer