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

    componentDidMount = () => {
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

        const componentDOM = ReactDOM.findDOMNode(this);

        window.snapterest.headerHTML = componentDOM.children[0].outerHTML;
        window.snapterest.tweetHTML = componentDOM.children[1].outerHTML;
    }

    componentWillUnmount = () => {
        console.log('[Snapterest] StreamTweet: 4. Running componentWillUnmount()');

        delete window.snapterest;
    }

    render() {
        console.log('[Snapterest] StreamTweet: 2. Running render()');

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