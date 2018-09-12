import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <header>

      <Link to="/">
        <img className="header-img" src="http://badheaven.ltd/images/header_cropped.png" alt="bad heaven ltd" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/shows">shows</Link>
          </li>
          <li>
          <Link className="nav-link" to="/music">music</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
