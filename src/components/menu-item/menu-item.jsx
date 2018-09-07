import React, {Component} from 'react'
import store from '../../store/store'

class MenuItem extends Component {

  handleClick = (event) => {
    event.preventDefault()
    store.dispatch({type: 'SHOW_MODAL_HIDE_MOB_MENU', data: {modal: true, mobileMenu: false}})
  }

  externalLink() {
    return (
      <a
        href={this.props.data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="MenuItem">
        {this.props.showIcon &&
          <span className={`fa ${this.props.data.icon}`}></span>
        }
        <span className="text">{this.props.data.title}</span>
      </a>
    )
  }

  modalButton() {
    return (
      <button onClick={this.handleClick} className="MenuItem">
        {this.props.showIcon &&
          <span className={`fa ${this.props.data.icon}`}></span>
        }
        <span className="text">{this.props.data.title}</span>
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
