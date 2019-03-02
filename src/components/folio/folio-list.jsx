import React, { Component } from 'react'
import FolioItem from './folio-item'

import './folio-list.sass'

class FolioList extends Component {

  getFolioItems() {
    return this.props.data.allFolioJson.edges.map((folioItem, i) => {
      return (
        <FolioItem folioItem={folioItem.node} key={i} />
      )
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="FolioList">
          {this.getFolioItems()}
        </div>
      </div>
    )
  }

}

export default FolioList
