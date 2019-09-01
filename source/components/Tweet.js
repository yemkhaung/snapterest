import React, { Component } from "react";

class Tweet extends Component {
  render() {
    const { tweet, onImageClick } = this.props;

    return (
      <div className="tweet">
        <p>{tweet.text}</p>
        <img src={tweet.media[0].url} alt={tweet.text} onClick={onImageClick} />
      </div>
    );
  }
}

export default Tweet;
