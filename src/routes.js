import React from 'react';

const Dashboard = React.lazy(() => import('./components/adminPages/Dashboard'));
const Liquildity = React.lazy(() => import('./components/adminPages/liquidilty'));
const Intraday = React.lazy(() => import('./components/adminPages/Intraday'));

const routes = [
  { path: '/admin', exact: true, name: 'Admin' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/liquildity', exact: true, name: 'Admin', component: Liquildity },
  { path: '/admin/intraday', exact: true, name: 'Service', component: Intraday },
];

export default routes;
