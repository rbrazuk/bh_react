import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';
import ShowsList from './shows_list';

class Shows extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    if (this.props.shows == {}) {
      return (
        <div>
          loading shows...
        </div>
      )
    }
    return (
      <ShowsList shows={this.props.shows} />
    );
  }
}

function mapStateToProps(state) {
  return {shows: state.shows};
}

export default connect(mapStateToProps, { fetchShows })(Shows);
