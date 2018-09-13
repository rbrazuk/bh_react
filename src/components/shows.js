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
      <div className="shows-container">
        <ShowsList shows={this.props.shows} />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {shows: state.shows};
}

export default connect(mapStateToProps, { fetchShows })(Shows);
