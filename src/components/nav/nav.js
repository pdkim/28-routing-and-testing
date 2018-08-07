import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

  render() {

    return (
      <nav>
        <ul>
          <li>
            <NavLink className="link" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" exact to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>

    );
  }
}