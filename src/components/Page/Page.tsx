import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';

export const Page: FC = () => (
  <div className="page">
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </div>
);