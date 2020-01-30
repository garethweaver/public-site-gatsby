import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from 'components/tweet/tweet'
import { HIDE_MODAL } from 'store/actions'
import iconClose from 'images/icons/times-alt.svg'
import iconRefresh from 'images/icons/refresh.svg'
import './modal.sass'

class Modal extends Component {

  constructor(props){
    super(props)
    this.state = {
      tweets: [],
      loading: true
    }
  }

  closeModal = (event) => {
    this.props.hideModal()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    document.body.classList.add('u-no-scroll')
    this.fetchTweets()
  }

  componentWillUnmount() {
    document.body.classList.remove('u-no-scroll')
    document.removeEventListener('keydown', this.handleKeydown)
  }

  async fetchTweets() {
    let tweets = await fetch('https://www.garethweaver.com/assets/php/php-tweets/tweets.php')
    tweets = await tweets.json()
    this.setState({
      tweets: tweets,
      loading: false
    })
  }

  getLoader() {
    return (
      <div className="Modal__spinner">
        <img
          src={iconRefresh}
          alt="Icon loading" />
      </div>
    )
  }

  getTweets() {
    return this.state.tweets.length ? (
      <ul className="Modal__tweet-list">
        {this.state.tweets.map((tweet, i) => {
          return (
            <Tweet key={i} tweet={tweet} />
          )
        })}
      </ul>
    ) : this.getLoader()
  }

  handleKeydown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal()
    }
  }

  render() {
    return (
      <aside className="Modal">
        <div className="Modal__wrapper">
          <button
            onClick={this.closeModal}
            aria-label="Close tweets modal"
            className="Modal__close">
            <img
              src={iconClose}
              alt="Icon close tweets modal" />
          </button>
          <div className="Modal__inner a-modal-inner">
            <header className="Modal__header">
              <h1>Follow Me</h1>
              <a href="https://twitter.com/garethdweaver">@garethdweaver</a>
            </header>
            {this.getTweets()}
          </div>
        </div>
      </aside>
    )
  }

}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(HIDE_MODAL),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
