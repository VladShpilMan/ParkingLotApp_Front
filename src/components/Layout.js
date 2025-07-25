import React from 'react';
import Header from './Header';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;