import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOW_MODAL_HIDE_MOB_MENU } from '../../store/actions'

class MenuItem extends Component {

  linkContent() {
    return (
      <>
        {this.props.showIcon &&
          <span className={`fa ${this.props.data.icon}`}></span>
        }
        <span className="text">{this.props.data.title}</span>
      </>
    )
  }

  externalLink() {
    return (
      <a
        href={this.props.data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="MenuItem"
        aria-label={this.props.data.title}>
        {this.linkContent()}
      </a>
    )
  }

  modalButton() {
    return (
      <button
        onClick={this.props.showModal}
        className="MenuItem"
        aria-label="Open Twitter modal">
        {this.linkContent()}
      </button>
    )
  }

  render() {
    return (
      <>
        {this.props.data.link ?
          this.externalLink() :
          this.modalButton()
        }
      </>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(SHOW_MODAL_HIDE_MOB_MENU),
  }
}

export default connect(null, mapDispatchToProps)(MenuItem)
