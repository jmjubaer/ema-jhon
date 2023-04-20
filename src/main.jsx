import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import LoginPage from './Components/Login/LoginPage';
import loadedData from './utilities/loadedCartData';
import CheckOut from './Components/Order/checkout/CheckOut';
import SignUp from './Components/Login/SignUp';
import AuthProvider from './Context/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"/orders",
        element:<Order></Order>,
        loader:  loadedData
        
      },
      {
        path:"/inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"/checkout",
        element:<CheckOut></CheckOut>
      },
      {
        path:"/login",
        element:<LoginPage />
      },
      {
        path:"/signup",
        element:<SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)
