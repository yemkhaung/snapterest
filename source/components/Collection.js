import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import CollectionControls from "./CollectionControls";
import TweetList from "./TweetList";
import Header from "./Header";

class Collection extends Component {
  createHTMLMarkupStr = () => {
    const { tweets } = this.props;

    const htmlStr = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={tweets} />
    );

    const htmlMarkup = {
      html: htmlStr
    };

    return JSON.stringify(htmlMarkup);
  };

  getTweetIdsList = () => {
    return Object.keys(this.props.tweets);
  };

  getNumTweetCollection = () => this.getTweetIdsList().length;

  render() {
    const numTweetInCollection = this.getNumTweetCollection();

    if (numTweetInCollection > 0) {
      const {
        tweets,
        onRemoveTweetFromCollection,
        onRemoveAllTweetsFromCollection
      } = this.props;

      const htmlMarkup = this.createHTMLMarkupStr();

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numTweetinCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection}
          />

          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={onRemoveTweetFromCollection}
          />
        </div>
      );
    }

    return <Header text="Your collection is empty" />
  }
}

export default Collection;
