import React, {Component} from 'react'
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
      <div className="FolioList wrap">
        {this.getFolioItems()}
      </div>
    )
  }

}

export default FolioList
