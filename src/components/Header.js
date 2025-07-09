import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;