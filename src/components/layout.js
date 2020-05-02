import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navigation from "./Navigation/Navigation"
import Footer from "./Navigation/Footer"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const menuItems = [
        {
            name: "About",
            url : '/'
        },
        {
            name: "Project",
            url : '/about'
        },
        {
            name: "Contact",
            url : '#contactSection '
        }
    ]

    return (
        <div>
            <Navigation title={data.site.siteMetadata.title} menuItems={menuItems} />
            <div className="">
                <div style={{height: "55px"}}> </div>
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
