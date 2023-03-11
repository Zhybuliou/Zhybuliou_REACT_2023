import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
      </header>
    );
  }
}
