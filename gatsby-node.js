const path = require('path')

const getFolioPageData = async (graphql) => {
  let query = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              url
              external
            }
          }
        }
      }
    }
  `)
  return query
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const folioTemplate = path.resolve('src/templates/folio-detail.jsx')
  const result = await getFolioPageData(graphql)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    if (!edge.node.frontmatter.external) {
      createPage({
        path: edge.node.frontmatter.url,
        component: folioTemplate,
        context: {},
      })
    }
  })
}

exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
