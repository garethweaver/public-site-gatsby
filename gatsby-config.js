require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Gareth Weaver - Front-end Web Designer & Developer`,
    description: `I'm a front-end web designer and developer. I'm always happy to have a chat about websites, hosting, technology or rugby. Why not send me a message?`,
    url: process.env.PUBLIC_URL,
    image: `/images/img-og.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gareth Weaver`,
        short_name: `GW`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          store: `src/store`,
          data: `src/data`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-resolve-src`,
      options: {
        addSassLoader: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-22525855-2`,
        head: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
  ],
}
