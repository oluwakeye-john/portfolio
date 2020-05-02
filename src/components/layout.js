import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
import Navigation from "./Navigation/Navigation"
import Footer from "./Navigation/Footer"
import FixedButtons from "./FixedButtons/FixedButtons"

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
            name: "Services",
            url : '#serviceSection'
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
            <FixedButtons />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
