import React, { Component } from 'react';
import ShowsListItem from './shows_list_item';

export default class ShowsList extends Component {
  constructor(props) {
    super(props);
  }

  renderShows() {
    return _.map(this.props.shows, show => {
      return (
        <ShowsListItem key={show.date} show={show}/>
      );
    })
  }

  render() {
    return (
        <ul className="shows-list">{this.renderShows()}</ul>
    );
  }
}
