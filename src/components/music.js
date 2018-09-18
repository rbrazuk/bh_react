import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReleases } from '../actions';
import ReleasesList from './releases_list';

class Music extends Component {
  componentDidMount() {
    this.props.fetchReleases();
  }
  render() {
    return (
      <div className="releases-container">
        <ReleasesList releases={this.props.releases} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {releases: state.releases};
}

export default connect(mapStateToProps, { fetchReleases })(Music);
