import React from 'react'
import ReactDOM from 'react-dom/client'

// styles and css 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cart from './components/Cart/Cart.jsx'
import MyAccount from './components/MyAccount/MyAccount.jsx'

import Preowned from "./components/Preowned/Preowned.jsx"
import Refubrished from "./components/Refubrished/Refubrished.jsx"
import Wholesale from "./components/Wholesale/Wholesale.jsx"
import Resources from "./components/Resources/Resources.jsx"
import Contactus  from "./components/Contactus/Contactus.jsx"
import Offer from "./components/Offer/Offer.jsx"
import Home from './components/Home/Home.jsx'
import AdminSecret from './components/AdminSecret/AdminSecret';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"",
        element:<Home></Home>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "myaccount",
        element: <MyAccount></MyAccount>
      },
      {
        path:"preowned",
        element:<Preowned></Preowned>
      },
      {
        path:"refubrished",
        element:<Refubrished></Refubrished>
      },
      {
        path:"wholesale",
        element:<Wholesale></Wholesale>
      },
      {
        path:"resources",
        element:<Resources></Resources>
      },
      {
        path:"contactus",
        element:<Contactus></Contactus>
      },
      {
        path:"offer",
        element:<Offer></Offer>
      },
      {
        path:"admin-secret",
        element:<AdminSecret></AdminSecret>
      },

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
