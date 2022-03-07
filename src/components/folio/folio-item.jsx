import React from 'react'
import { Link } from 'gatsby'
import iconGlobe from 'images/icons/globe.svg'
import FolioThumbnail from './folio-thumbnail'
import './folio-item.sass'

const externalLink = data => {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer">
      <FolioThumbnail data={data} />
      <span className="FolioItem__icon">
        <img
          src={iconGlobe}
          alt="Codepen icon" />
      </span>
    </a>
  )
}

const internalLink = data => {
  return (
    <Link to={data.url}>
      <FolioThumbnail data={data} />
    </Link>
  )
}

const FolioItem = ({ folioItem }) => {
  const data = folioItem.frontmatter
  return (
    <div className="FolioItem">
      {data.external ?
        externalLink(data) :
        internalLink(data)
      }
    </div>
  )
}

export default FolioItem
