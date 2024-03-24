import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home"
import MainLayout from "../Components/MainLayout/MainLayout"
import Blogs from "../Pages/Blogs"
import Blog from "../Pages/Blog"
import Bookmarks from "../Pages/Bookmarks"
import Content from "../Components/Content"
import Author from "../Components/Author"
export const router = createBrowserRouter([
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
          path: 'blog/:id',
          element: <Blog></Blog>,
          loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element: <Content></Content>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path: '/bookmarks',
          element: <Bookmarks/>
        }
      ])
    }
])