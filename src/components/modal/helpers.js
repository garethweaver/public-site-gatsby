export const fetchTweets = async () => {
  let tweets = await fetch(`${process.env.GATSBY_API_URL}/_tweets`)
  tweets = await tweets.json()
  return tweets
}
