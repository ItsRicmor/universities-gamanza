import { useEffect } from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "view/layout/Layout";
import { HomePage } from "view/pages/home";
import { NoMatch } from "view/pages/no-match";
import { fetchUniversities } from 'state/universities/universities.effects';
import { AppDispatch } from 'state';
import { useDispatch } from 'react-redux';
import { CountryPage } from './pages/country';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ':country', element: <CountryPage /> },
      { path: 'individual/:country/:university', element: <CountryPage /> },
      { path: "*", element: <NoMatch /> },
    ]
  }
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <RouterProvider router={router} />
  );
}

export default App;
