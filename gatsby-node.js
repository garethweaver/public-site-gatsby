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
