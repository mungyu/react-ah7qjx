import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [active, setActive] = useState('');

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={handleClick}
            id="home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            onClick={handleClick}
            id="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/services"
            activeClassName="active"
            onClick={handleClick}
            id="services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            onClick={handleClick}
            id="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
