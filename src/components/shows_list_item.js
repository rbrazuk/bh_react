import React, { Component } from 'react';

export default class ShowsListItem extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    let year = date.slice(0,4);
    let month = date.slice(4,6);
    let day = date.slice(6,8);
    return(month + "/" + day + "/" + year);
  }

  render() {
    const show = this.props.show;
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
    );
  }
}
