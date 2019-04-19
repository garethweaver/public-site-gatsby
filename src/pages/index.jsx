import React from 'react'
import Helmet from 'react-helmet'
import FolioList from '../components/folio/folio-list'
import Intro from '../components/intro/intro'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Gareth Weaver - Front-end Web Designer &amp; Developer</title>
    </Helmet>
    <Intro />
    <FolioList />
  </Layout>
)

export default IndexPage
