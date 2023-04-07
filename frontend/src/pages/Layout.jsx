import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../nav';
import 'bootstrap/dist/css/bootstrap.min.css';

// Used to create navigation. It calls the Nav file and then the rest
const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
