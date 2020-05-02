import React from "react"
import './SocialButtons.scss'
import { graphql, useStaticQuery } from "gatsby"

const SocialButtons = () => {
    const data = useStaticQuery(
      graphql`
        query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              github
              twitter
              medium
            }
          }
        }
      }
    `
    )

    return (
        <div className="social-buttons">
            <a href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}>
                <span className="fab fa-twitter fa-2x mr-3"> </span>
            </a>
            <a href={`https://github.com/${data.site.siteMetadata.social.github}`}>
                <span className="fab fa-github fa-2x mr-3"> </span>
            </a>
            <a href={`https://medium.com/${data.site.siteMetadata.social.medium}`}>
                <span className="fab fa-medium fa-2x mr-3"> </span>
            </a>
        </div>
    )
}


export default SocialButtons