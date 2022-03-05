import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <body class="p-folio" />
        <title>G4r0th We4ver - Frontend Web Designer &amp; Developer</title>
      </Helmet>
      <div className="FolioDetail u-wrap">
        <div className="u-inner">
          <div className="folio-text folio-block">
            <div className="FourOhFour">
              <h1>404 :(</h1>
              <p>
                You just hit a route that doesn't exist&hellip; the sadness.
                It's probably best to start again.
              </p>
              <Link to="/" className="logo MenuItem">
                Head home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
