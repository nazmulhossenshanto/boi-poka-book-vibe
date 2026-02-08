import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './components/ErrorPage/ErrorPage'
import MainLayouts from './components/Layouts/MainLayouts'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import BookDetails from './components/BookDetails/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'book/:bookId',
        loader: ()=> fetch('/booksData.json'),
        element: <BookDetails></BookDetails>
      },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
