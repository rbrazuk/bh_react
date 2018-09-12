import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <h3>bad heaven ltd</h3>
      <Link to="/shows">
              shows
      </Link>
      <Link to="/music">
              music
      </Link>
    </div>

  )
}
