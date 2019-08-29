import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Snapterest extends Component {
    state = {
        isHeaderHidden: false
    }

    handleClick = () => {
        this.setState(prevState => ({
            isHeaderHidden: !prevState.isHeaderHidden
        }));
    }

    render() {
        const {isHeaderHidden} = this.state;

        if(isHeaderHidden) {
            return (
                <button className="btn btn-primary"
                    onClick={this.handleClick}>
                    Toggle Header
                </button>
            );
        };

        return (
            <div>
                <h1 className="header">{this.props.header}</h1>
                <button className="btn btn-primary" onClick={this.handleClick}>Toggle Header</button>
            </div>
            
        );
    }
}

ReactDOM.render(
    <Snapterest header="This is Stateful React Component!" />, 
    document.getElementById("app")
);