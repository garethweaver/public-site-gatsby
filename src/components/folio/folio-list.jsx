import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FolioItem from './folio-item'
import './folio-list.sass'

class FolioList extends Component {

  getFolioItems(items) {
    return items.map((folioItem, i) => {
      return (
        <FolioItem
          folioItem={folioItem.node}
          current={this.props.current === folioItem.node.frontmatter.url}
          key={i} />
      )
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="FolioList">
          <StaticQuery
            query={graphql`
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
            `}
            render={
              data => this.getFolioItems(data.allMarkdownRemark.edges)
            } />
        </div>
      </div>
    )
  }

}

export default FolioList
