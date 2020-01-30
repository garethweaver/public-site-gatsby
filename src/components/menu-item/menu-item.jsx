import React from 'react'
import { connect } from 'react-redux'
import { SHOW_MODAL_HIDE_MOB_MENU } from 'store/actions'

function linkContent(data, showIcon) {
  const Icon = data.icon
  return (
    <>
      {showIcon &&
        <span className="MenuItem__icon">
          <Icon />
        </span>
      }
      <span className="MenuItem__text">{data.title}</span>
    </>
  )
}

function externalLink(data, showIcon) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="MenuItem"
      aria-label={data.title}>
      {linkContent(data, showIcon)}
    </a>
  )
}

function modalButton(data, showIcon, showModal) {
  return (
    <button
      onClick={showModal}
      className="MenuItem"
      aria-label="Open Twitter modal">
      {linkContent(data, showIcon)}
    </button>
  )
}

function MenuItem({ data, showIcon, showModal }) {
  return (
    <>
      {data.link ?
        externalLink(data, showIcon) :
        modalButton(data, showIcon, showModal)
      }
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(SHOW_MODAL_HIDE_MOB_MENU),
  }
}

export default connect(null, mapDispatchToProps)(MenuItem)
