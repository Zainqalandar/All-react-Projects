import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home'
import About from './About/About'
import Compny from './Compny/Compny'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '',
      element: <Home />
    }, {
      path: '/about',
      element: <About />
    },
    {
      path: '/company',
      element: <Compny />
    },]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Layout /> */}
  </React.StrictMode>,
)
