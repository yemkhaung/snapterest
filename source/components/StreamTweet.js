import React, { Component } from "react";
import Header from "./Header";
import Tweet from "./Tweet";
import CollectionActionCreators from "../actions/CollectionActionCreators";

class StreamTweet extends Component {
    state = {
        numCharIsInc: false,
        headerText: null
    };

    componentWillMount = () => {
        console.log(
            "[Snapterest] StreamTweet: 1. Running componentWillMount()"
        );
        this.setState({
            numCharIsInc: true,
            headerText: "Latest public photo from Twitter"
        });

        window.snapterest = {
            numReceivedTweets: 1,
            numDisplayedTweets: 1
        };
    };

    componentWillReceiveProps = nextProps => {
        console.log(
            "[Snapterest] StreamTweet: 2. Running componentWillReceiveProps()"
        );

        const { tweet: currentTweet } = this.props;
        const { tweet: nextTweet } = nextProps;

        const currentTweetLength = currentTweet.text.length;
        const nextTweetLength = nextTweet.text.length;
        const isNumOfCharsIncr = nextTweetLength > currentTweetLength;
        let headerText;

        this.setState({
            numCharIsInc: isNumOfCharsIncr
        });

        if (isNumOfCharsIncr) {
            headerText = "Number of characters is increasing";
        } else {
            headerText = "Latest public photo from Twitter";
        }

        this.setState({
            headerText
        });

        window.snapterest.numReceivedTweets++;
    };

    addTweetToCollection = tweet => {
        CollectionActionCreators.addTweetToCollection(tweet);
    };

    render() {
        console.log("[Snapterest] StreamTweet: Running render()");

        const { headerText } = this.state;
        const { tweet } = this.props;

        return (
            <section>
                <Header text={headerText} />
                <Tweet tweet={tweet} onImageClick={this.addTweetToCollection} />
            </section>
        );
    }
}

export default StreamTweet;
