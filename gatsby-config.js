module.exports = {
  // siteMetadata: {
  //   title: 'Gatsby Default Starter',
  // },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gareth Weaver',
        short_name: 'GW',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2ecc71',
        display: 'minimal-ui',
        icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-22525855-2',
        head: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
  ],
}
