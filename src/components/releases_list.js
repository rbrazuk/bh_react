import React, { Component } from 'react';
import ReleasesListItem from './releases_list_item';

export default class ReleasesList extends Component {
  constructor(props) {
    super(props);
  }

  renderReleases() {
    return _.map(this.props.releases, release => {
      return (
        <ReleasesListItem key={release.title} release={release} />
      );
    })
  }

  render() {
    return (
        <ul className="releases-list">{this.renderReleases()}</ul>
    );
  }
}
