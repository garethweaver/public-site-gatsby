import React from 'react'
import { Link } from 'gatsby'
import IconGlobe from 'images/icons/globe.inline.svg'
import IconGithub from 'images/icons/github-alt.inline.svg'
import IconArrow from 'images/icons/arrow-circle-o-right.inline.svg'
import './folio-subfooter.sass'

const FolioSubfooter = ({ item }) => {
  return (
    <footer className="FolioSubfooter">
      <nav className="FolioSubfooter__nav">
        {item.live_site &&
          <a
            href={item.live_site}
            target="_blank"
            rel="noopener noreferrer">
              <IconGlobe className="FolioSubfooter__icon" />
              Visit
          </a>
        }
        {item.repository &&
          <a
            href={item.repository}
            target="_blank"
            rel="noopener noreferrer">
              <IconGithub className="FolioSubfooter__icon" />
              Repo
          </a>
        }
        {item.next_page &&
          <Link to={`/folio${item.next_page}`}>
              <IconArrow className="FolioSubfooter__icon" />
              Next
          </Link>
        }
      </nav>
    </footer>
  )
}

export default FolioSubfooter
