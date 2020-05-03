module.exports = {
    siteMetadata: {
        title: `Oluwakeye John`,
        description: `Oluwakeye John is a fullstack web developer which currently resides in Ibadan, Nigeria.`,
        author: `@oluwakeyejohn`,
        social: {
            twitter: "oluwakeyejohn",
            github: "oluwakeye-john",
            medium: "@oluwakeyejohn"
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Dancing Script', 'Droid Sans' ]
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Oluwakeye John`,
                short_name: `John`,
                start_url: `/`,
                background_color: `#6C63FF`,
                theme_color: `#6C63FF`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
