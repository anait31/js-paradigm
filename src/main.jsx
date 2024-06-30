import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProviders from './providers/AuthProviders';
import PrivateRoutes from './components/routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <PrivateRoutes><About></About></PrivateRoutes>
      },
      {
        path: '/services',
        element: <PrivateRoutes><Services></Services></PrivateRoutes>
      },
      {
        path: '/contact',
        element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
