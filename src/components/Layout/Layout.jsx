import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';

function Layout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default Layout;
