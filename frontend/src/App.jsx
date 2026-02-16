import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verfiy from './pages/Verfiy'
import VerfiyEmail from './pages/VerfiyEmail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },{
    path: '/signup',
    element: <><Signup/></>
  },
  {
    path: '/login',
    element: <><Login/></>
  },
  {
    path: '/verify',
    element: <><Verfiy/></>
  },
  {
    path: '/verify/:token',
    element: <><VerfiyEmail/></>
  },
  

])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App