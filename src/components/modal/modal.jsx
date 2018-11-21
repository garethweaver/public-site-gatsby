import React, {Component} from 'react'
import store from '../../store/store'
import Tweet from '../tweet/tweet'
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
    store.dispatch({type: 'HIDE_MODAL'})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    document.body.classList.add('no-scroll')
    fetch('https://www.garethweaver.com/assets/php/php-tweets/tweets.php')
      .then(result => {
        return result.json()
      }).then(result => {
        this.setState({
          tweets: result,
          loading: false
        })
      })
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll')
    document.removeEventListener('keydown', this.handleKeydown)
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

export default Modal
