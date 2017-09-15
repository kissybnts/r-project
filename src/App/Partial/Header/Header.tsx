import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">TOP</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/sentences">Sentences</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}