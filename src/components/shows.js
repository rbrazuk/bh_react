import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShows } from '../actions';

class Shows extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  formatDate(date) {
    let year = date.slice(0,4);
    let month = date.slice(4,6);
    let day = date.slice(6,8);
    return(month + "/" + day + "/" + year);
  }

  renderShows() {
    return _.map(this.props.shows, show => {
      return (
        <li key={show.date}>
          <div className="row">
            <div className="show-info-container">
              <div className="shows-list-date show-info-div">{this.formatDate(show.date)}</div>
              <div className="venue-city show-info-div">{show.venue.city}, {show.venue.state}</div>
              <div className="show-info-div">{show.venue.name}</div>
              <div className="other-bands">w/ other bands</div>
            </div>
            <div className="buttons-container">
              <a className="shows-list-button" href="{show.ticketLink == null ? show.eventLink : show.ticketLink}" target="_blank"><div>tickets</div></a>
              <a className="shows-list-button" href="${show.eventLink}" target="_blank"><div>rsvp</div></a>
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="shows-container">
        <ul id="shows-list">{this.renderShows()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {shows: state.shows};
}

export default connect(mapStateToProps, { fetchShows })(Shows);
