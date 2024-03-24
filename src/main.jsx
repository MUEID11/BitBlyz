import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import './index.css'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom'
import Blogs from './Pages/Blogs'
import Bookmarks from './Pages/Bookmarks'
import MainLayout from './Components/MainLayout/MainLayout'
const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:([
        {
          index:true,
          element: <Home/>
        },
        {
          path: '/blogs',
          element: <Blogs/>,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path: '/bookmarks',
          element: <Bookmarks/>
        }
      ])
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
