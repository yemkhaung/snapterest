import React, {Component} from 'react';

import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {
    state = {
        numCharIsInc: false,
        headerText: null
    }

    componentWillMount() {
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

    component

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