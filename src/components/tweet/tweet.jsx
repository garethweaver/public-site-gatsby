import React, { Component } from 'react'
import './tweet.sass'

class Tweet extends Component {

  constructor(props) {
    super(props)
    this.replacements = [
      {
        type: 'url',
        // eslint-disable-next-line
        regex: /[A-Za-z]+:\/\/[A-Za-z0-9_-]+\.[A-Za-z0-9_:%&~\?\/.=-]+/g,
      },
      {
        type: 'user',
        regex: /[@]+[A-Za-z0-9_-]+/g,
        linkTo: 'http://twitter.com/',
        encode: ['@','']
      },
      {
        type: 'hash',
        regex: /[#]+[A-Za-z0-9_-]+/g,
        linkTo: 'https://twitter.com/search?q=',
        encode: ['#','%23']
      }
    ]
  }

  parseTweet(tweet) {
    for (let rep of this.replacements) {
      tweet = this.doReplacements(rep, tweet)
    }
    return tweet
  }

  doReplacements(rep, tweet) {
    return tweet.replace(rep.regex, (string) => {
      let url = rep.encode
        ? rep.linkTo + string.replace(rep.encode[0], rep.encode[1])
        : string
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${string}</a>`
    })
  }

  render() {
    return (
      <li className="Tweet">
        <div className="Tweet__image-wrap">
          <img
            className="Tweet__image"
            src={this.props.tweet.user.profile_image_url_https}
            alt={this.props.tweet.user.screen_name} />
        </div>
        <p
          className="Tweet__text"
          dangerouslySetInnerHTML={{__html: this.parseTweet(this.props.tweet.text)}} />
      </li>
    )
  }

}

export default Tweet
