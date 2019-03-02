import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from '../tweet/tweet'
import { HIDE_MODAL } from '../../store/actions'
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
    document.body.classList.add('no-scroll')
    this.fetchTweets()
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll')
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
      <div className="loading-spinner-wrapper">
        <span className="loading-spinner fa fa-refresh fa-spin" />
      </div>
    )
  }

  getTweets() {
    return this.state.tweets.length ? (
      <ul className="tweet-list">
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
        <div className="modal-wrapper">
          <button
            onClick={this.closeModal}
            aria-label="Close tweets modal"
            className="close-modal">
            <span className="fa fa-times" />
          </button>
          <div className="modal-inner">
            <header>
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
