class TweetUtils {
    getListOfTweetIds (tweets) {
        return tweets.map((tweet) => tweet.id);
    };
}

export default TweetUtils;