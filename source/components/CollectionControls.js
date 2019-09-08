import React, { Component } from "react";
import CollectionRenameForm from "./CollectionRenameForm";
import CollectionExportForm from "./CollectionExportForm";
import Button from "./Button";
import Header from "./Header";

class CollectionControls extends Component {
  state = {
    name: "new",
    isEditingName: false
  };

  getHeaderText = () => {
    const { name } = this.state;
    const { numberOfTweetsInCollection: numTweetsInCollection } = this.props;

    let text;
    if (numTweetsInCollection == 1) {
      text = `${numTweetsInCollection} tweet in your`;
    } else {
      text = `${numTweetsInCollection} tweets in your`;
    }

    return (
        <span>
            {text} <strong>{name}</strong> collection
        </span>
    );
  };

  setCollectionName = name => {
    this.setState({
      name: name,
      isEditingName: false
    });
  };

  toggleEditCollectionName = () => {
    this.setState(prevState => ({
      isEditingName: !prevState.isEditingName
    }));
  };

  render() {
    const { name, isEditingName } = this.state;
    const { htmlMarkup, onRemoveAllTweetsFromCollection } = this.props;

    if (isEditingName) {
      return (
        <CollectionRenameForm
          name={name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />
        <Button
          label="Empty collection"
          handleClick={onRemoveAllTweetsFromCollection}
        />
        <CollectionExportForm htmlMarkup={htmlMarkup} />
      </div>
    );
  }
}

export default CollectionControls;
