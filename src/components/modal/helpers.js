export const fetchTweets = async () => {
  try {
    let tweets = await fetch(`${process.env.GATSBY_API_URL}/_tweets`)
    tweets = await tweets.json()
    return tweets
  } catch (error) {
    console.error(error)
    return []
  }
}
