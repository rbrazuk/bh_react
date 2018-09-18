import React, { Component } from 'react';

export default class ShowButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.link == null) {
      return (
        <a className="shows-list-button disabled" target="_blank">{this.props.text}</a>
      );
    }
    return (
      <a className="shows-list-button" href={this.props.link} target="_blank">{this.props.text}</a>
    );
  }
}
