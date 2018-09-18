import React, { Component } from 'react';
import ReleaseLink from './release_link';

export default class ReleasesListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const release = this.props.release;
    return (
      <li className="releases-list-item">
        <img src={release.imageUrl} width="300" />
        <div className="release-title">{release.title}</div>
        <div>{release.year}</div>
        <div className="listen-links-container">
          <span>listen: </span>
          <ReleaseLink url={release.spotifyLink} text="spotify" />
          <ReleaseLink url={release.bandcampLink} text="bandcamp" />
        </div>
        <div className="purchase-links-container">
          <span>buy: </span>
          <ReleaseLink url={release.formats.vinyl} text="vinyl" />
          <ReleaseLink url={release.formats.tape} text="tape" />
          <ReleaseLink url={release.formats.cd} text="cd" />
        </div>
      </li>
    );
  }
}
