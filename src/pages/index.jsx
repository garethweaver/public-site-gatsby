import React from 'react'
import Seo from 'components/seo/seo'
import FolioList from 'components/folio/folio-list'
import Intro from 'components/intro/intro'
import Layout from 'components/layout'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Intro />
    <FolioList />
  </Layout>
)

export default IndexPage
