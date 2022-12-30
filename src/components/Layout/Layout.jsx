import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
