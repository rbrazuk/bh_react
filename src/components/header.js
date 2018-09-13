import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <header>

      <Link to="/">
        <img className="header-img" src="http://badheaven.ltd/images/header_cropped.png" alt="bad heaven ltd" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" to="/shows">shows</NavLink>
          </li>
          <li>
          <NavLink className="nav-link" to="/music">music</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
