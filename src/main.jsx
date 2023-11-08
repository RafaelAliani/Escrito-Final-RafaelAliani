import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { Form } from './components/Form.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/crear",
    element: <Form/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
