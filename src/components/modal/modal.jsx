import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Tweet from 'components/tweet/tweet'
import { HIDE_MODAL } from 'store/actions'
import iconClose from 'images/icons/times-alt.svg'
import iconRefresh from 'images/icons/refresh.svg'
import './modal.sass'

const fetchTweets =  async () => {
  let tweets = await fetch(`${process.env.GATSBY_API_URL}/_tweets`)
  tweets = await tweets.json()
  return tweets
}

const getTweets = tweets => (
  tweets.length > 0 ? (
    <ul className="Modal__tweet-list">
      {tweets.map((tweet, i) => {
        return (
          <Tweet key={i} tweet={tweet} />
        )
      })}
    </ul>
  ) : (
    <div className="Modal__spinner">
      <img
        src={iconRefresh}
        alt="Icon loading" />
    </div>
  )
)

const Modal = props => {
  const [ tweets, setTweets ] = useState([])

  useEffect(() => {
    const onHandleKeydown = e => {
      if (e.keyCode === 27) {
        props.hideModal()
      }
    }

    document.addEventListener('keydown', onHandleKeydown)
    document.body.classList.add('u-no-scroll')

    return () => {
      document.removeEventListener('keydown', onHandleKeydown)
      document.body.classList.remove('u-no-scroll')
    }
  }, [ props ])

  useEffect(() => {
    (async () => {
      setTweets(await fetchTweets())
    })()
  }, [])

  return (
    <aside className="Modal">
      <div className="Modal__wrapper">
        <button
          onClick={props.hideModal}
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
          {getTweets(tweets)}
        </div>
      </div>
    </aside>
  )
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
