import React from "react"
import "./SocialButtons.scss"
import { graphql, useStaticQuery } from "gatsby"

const SocialButtons = ({ size }) => {
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
              linkedin
            }
          }
        }
      }
    `
  )

  return (
    <div className="social-buttons">
      {size === "small" ? (
        <div>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
          >
            <span className="fab fa-twitter mr-3"> </span>
          </a>
          <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
          >
            <span className="fab fa-github mr-3"> </span>
          </a>
          <a
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          >
            <span className="fab fa-linkedin"> </span>
          </a>
        </div>
      ) : (
        <div>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
          >
            <span className="fab fa-twitter fa-2x mr-4"> </span>
          </a>
          <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
          >
            <span className="fab fa-github fa-2x mr-4"> </span>
          </a>
          <a
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          >
            <span className="fab fa-linkedin fa-2x"> </span>
          </a>
        </div>
      )}
    </div>
  )
}

export default SocialButtons
