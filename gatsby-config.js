module.exports = {
  siteMetadata: {
    title: `webSage`,
    description: `Kick off your next great business decision with a custom online presence!`,
    author: `@sagehogue`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Amatic SC`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
          {
            family: "Poiret One",
            variants: ["400", "700"],
          },
          { family: "Montserrat", variants: ["400", "500", "700"] },
          { family: "Monoton", variants: [`400`] },
          { family: "Press Start 2P", variants: [`400`] },
          { family: "Bungee Inline", variants: [`400`] },
          { family: "Megrim", variants: [`400`] },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
