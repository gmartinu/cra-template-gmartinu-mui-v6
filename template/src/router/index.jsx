import { createBrowserRouter, redirect } from 'react-router-dom';

import { Home, ErrorPage } from '../views';

const routesList = [
  {
    path: '*',
    loader: () => redirect('/home'),
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
    title: 'Home',
  },
];

const router = createBrowserRouter(routesList);

export { router, routesList };
