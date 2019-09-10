import React, { Component } from "react";
import TweetStore from "../stores/TweetStore";

import StreamTweet from "./StreamTweet";
import Header from "./Header";

class Stream extends Component {
    state = {
        tweet: TweetStore.getTweet()
    };

    onTweetChange = () => {
        this.setState({
            tweet: TweetStore.getTweet()
        });
    };

    componentWillMount() {
        TweetStore.removeChangeListener(this.onTweetChange);
    }

    componentDidMount() {
        TweetStore.addChangeListener(this.onTweetChange);
    }

    render() {
        const { tweet } = this.state;
        const headerText = "Waiting for public photos from Twitter...";

        if (tweet) {
            return <StreamTweet tweet={tweet} />;
        }

        return <Header text={headerText} />;
    }
}
export default Stream;
