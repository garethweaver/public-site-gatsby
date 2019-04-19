import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FolioDetail from '../components/folio/folio-detail'
import FolioList from '../components/folio/folio-list'

const FolioTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  frontmatter.html = html

  return (
    <Layout>
      <Helmet>
        <body class="page-folio" />
        <title>{frontmatter.meta.title}</title>
        <meta name="description" content={frontmatter.meta.description} />
      </Helmet>
      <FolioDetail data={frontmatter} />
      <FolioList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      frontmatter: {
        url: { eq: $path }
      }
    ) {
      html
      frontmatter {
        url
        title
        thumb {
          name
          type
        }
        external
        type
        year
        tools
        live_site
        repository
        images {
          resolution
          type
          name
          height
          width
        }
        next_page
        meta {
          title
          description
        }
      }
    }
  }
`

export default FolioTemplate
