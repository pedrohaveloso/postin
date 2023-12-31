import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/** TailwindCSS. */
import './main.css'

/** Páginas utilizadas pela rede. */
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import MePage from './pages/MePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import AuthProvider from '../presenter/providers/AuthProvider';
import LogoffPage from './pages/LogoffPage';
import ApiProvider from '../presenter/providers/ApiProvider';
import ApiErrorPage from './pages/ApiErrorPage';
import ConfigPage from './pages/ConfigPage';

/** Rotas. */
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <AuthProvider noAuthRedirect='/home' authNeed={false}>
        <WelcomePage />
      </AuthProvider>,
    errorElement:
      <ErrorPage />,
  },
  {
    path: '/logoff',
    element:
      <AuthProvider noAuthRedirect='/'>
        <LogoffPage />,
      </AuthProvider>
  },
  {
    path: "/home",
    element:
      <AuthProvider noAuthRedirect='/'>
        <HomePage />
      </AuthProvider>
  },
  {
    path: "/me",
    element:
      <AuthProvider noAuthRedirect='/'>
        <MePage />
      </AuthProvider>
  },
  {
    path: "/profile/*",
    element:
      <AuthProvider noAuthRedirect='/'>
        <ProfilePage />
      </AuthProvider>
  },
  {
    path: "/config",
    element:
      <AuthProvider noAuthRedirect='/'>
        <ConfigPage />
      </AuthProvider>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider onError={<ApiErrorPage />}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>,
)

