import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div>MOVIE PLACE</div>
        <NavLink to="/movies">movies list</NavLink>
        <NavLink to="/form">submit new movie</NavLink>
      </div>
    );
  }
}

export default Header;
