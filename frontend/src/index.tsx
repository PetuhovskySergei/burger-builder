import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error-page/error-page";
import LoginPage from "./pages/login-page/login-page";
import BurgerBuilderPage from "./pages/burger-builder-page/burger-builder-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: 'burger-builder/',
        element: <BurgerBuilderPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
