import React, { Component } from 'react';
import ShowButton from './show_button';

export default class ShowsListItem extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    let year = date.slice(0,4);
    let month = date.slice(4,6);
    let day = date.slice(6,8);

    if (month.startsWith("0")) {
      month = month.slice(1, month.length);
    }

    if (day.startsWith("0")) {
      day = day.slice(1, day.length);
    }

    return(month + "/" + day + "/" + year);
  }

  render() {
    const show = this.props.show;
    return (
      <li key={show.date}>
        <div className="row">
          <div className="show-info-container">
            <div className="shows-list-date show-info-div">{this.formatDate(show.date)}</div>
            <div className="venue-city show-info-div">{show.city}, {show.state}</div>
            <div className="show-info-div">{show.venue}</div>
            <div className="other-bands">w/ {show.otherBands}</div>
          </div>
          <div className="buttons-container">
            <ShowButton link={show.ticketLink} text="tickets" />
            <ShowButton link={show.eventLink} text="rsvp"/>
          </div>
        </div>
      </li>
    );
  }
}
