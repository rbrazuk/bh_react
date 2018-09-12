import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

class Shows extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  renderShows() {
    return _.map(this.props.shows, show => {
      return (
        <li key={show.date}>{show.date}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>{this.renderShows()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {shows: state.shows};
}

export default connect(mapStateToProps, { fetchShows })(Shows);
