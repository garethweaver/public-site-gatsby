import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FolioItem from './folio-item'
import './folio-list.sass'

const getFolioItems = items => {
  return items.map((folioItem, i) => {
    return (
      <FolioItem
        folioItem={folioItem.node}
        key={i} />
    )
  })
}

const FolioList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___order],
            order: DESC
          }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                url
                thumb {
                  name
                  type
                },
                external
              }
            }
          }
        }
      }
    `
  )
  return (
    <div className="u-wrap">
      <nav className="FolioList">
        {getFolioItems(allMarkdownRemark.edges)}
      </nav>
    </div>
  )
}

export default FolioList
