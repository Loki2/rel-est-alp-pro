import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/products";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Agent from "./pages/agent/Agent";
import Term from './pages/term/Term';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/:productId",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/agent",
        element: <Agent />
      },
      {
        path: "/term",
        element: <Term />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);