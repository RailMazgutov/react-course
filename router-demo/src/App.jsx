import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import HomePage from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <Products />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
