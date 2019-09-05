import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {
    state = {
        numCharIsInc: false,
        headerText: null
    }

    componentWillMount = () => {
        console.log('[Snapterest] StreamTweet: 1. Running componentWillMount()');
        this.setState({
            numCharIsInc: true,
            headerText: 'Latest public photo from Twitter'
        });

        window.snapterest = {
            numReceivedTweets: 1,
            numDisplayedTweets: 1
        }
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('[Snapterest] StreamTweet: 2. Running componentWillReceiveProps()');

        const {tweet: currentTweet} = this.props;
        const {tweet: nextTweet} = nextProps;

        const currentTweetLength = currentTweet.text.length;
        const nextTweetLength = nextTweet.text.length;
        const isNumOfCharsIncr = (nextTweetLength > currentTweetLength);
        let headerText;

        this.setState({
            numCharIsInc: isNumOfCharsIncr
        });

        if(isNumOfCharsIncr) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            headerText
        });

        window.snapterest.numReceivedTweets++;
    }

    componentDidMount = () => {
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

        const componentDOM = ReactDOM.findDOMNode(this);

        window.snapterest.headerHTML = componentDOM.children[0].outerHTML;
        window.snapterest.tweetHTML = componentDOM.children[1].outerHTML;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');

        return (nextProps.tweet.text.length > 1);
    }

    componentWillUpdate = () => {
        console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
        window.snapterest.numDisplayedTweets++;
    }

    componentWillUnmount = () => {
        console.log('[Snapterest] StreamTweet: 4. Running componentWillUnmount()');

        delete window.snapterest;
    }

    render() {
        console.log('[Snapterest] StreamTweet: Running render()');

        const {headerText} = this.state;
        const {tweet, onAddTweetToCollection} = this.props;

        return (
            <section>
                <Header text={headerText} />
                <Tweet 
                    tweet={tweet}
                    onImageClick={onAddTweetToCollection}
                />
            </section>
        );
    }
}

export default StreamTweet;