import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/products";

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
      }
    ]
  },
]);