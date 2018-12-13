import React, {Component} from 'react'
import store from '../../store/store'

class MenuItem extends Component {

  handleClick = (event) => {
    event.preventDefault()
    store.dispatch({type: 'SHOW_MODAL_HIDE_MOB_MENU'})
  }

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
        onClick={this.handleClick}
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

export default MenuItem
