import React, { Component } from 'react';

export default class ReleaseLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.url == null) {
      return null;
    }
    return (
      <a className="release-link" href={this.props.url}>{this.props.text}</a>
    );
  }
}
