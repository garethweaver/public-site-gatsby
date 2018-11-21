/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    const folioTemplate = path.resolve('src/templates/folio-detail.jsx')
    resolve(
      graphql(`
        {
          allFolioJson {
            edges {
              node {
                id,
                url,
                title,
                thumb {
                  name,
                  type
                },
                external,
                type,
                year,
                description,
                tools,
                live_site,
                repository,
                images {
                  resolution,
                  type,
                  name,
                  height,
                  width
                }
                next_page,
                meta {
                  title,
                  description
                }
              }
            }
          }
        }
      `).then((result) => {

        if (result.errors) { reject(result.errors) }

        result.data.allFolioJson.edges.forEach((edge) => {
          if (!edge.node.external){
            createPage ({
              path: 'folio' + edge.node.url,
              component: folioTemplate,
              context: {
                slug: 'folio' + edge.node.url,
                id: edge.node.id,
                allFolioJson: result.data.allFolioJson
              }
            })
          }
        })

        return
      })
    )
  })
}
