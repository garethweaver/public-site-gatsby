import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import FolioList from '../components/folio/folio-list'
import Intro from '../components/intro/intro'
import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
      <title>Gareth Weaver - Front-end Web Designer &amp; Developer</title>
    </Helmet>
    <Intro />
    <FolioList data={data} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query FolioPageQuery {
    allFolioJson {
      edges {
        node {
          id,
          title,
          url,
          thumb {
            base64,
            name
          },
          external
        }
      }
    }
  }
`
