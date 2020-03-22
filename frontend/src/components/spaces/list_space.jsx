import React, { useState } from 'react';

class ListSpace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newTweet: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let tweet = {
            text: this.state.text
        };

        this.props.composeTweet(tweet);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your tweet..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

export default ListSpace;