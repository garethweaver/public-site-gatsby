import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FolioDetail from '../components/folio/folio-detail'
import FolioList from '../components/folio/folio-list'

class FolioTemplate extends React.Component {

  getFolioItem() {
    let item = this.props.pathContext.allFolioJson.edges.find(item => item.node.id === this.props.pathContext.id)
    return item.node
  }

  render() {
    const item = this.getFolioItem()

    return (
      <Layout>
        <Helmet>
          <body class="page-folio" />
          <title>{item.meta.title}</title>
          <meta name="description" content={item.meta.description} />
        </Helmet>
        <FolioDetail folioItem={item} />
        <FolioList data={this.props.pathContext} />
      </Layout>
    )
  }

}

export default FolioTemplate
