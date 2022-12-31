// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
