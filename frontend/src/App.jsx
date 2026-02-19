import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verfiy from './pages/Verfiy'
import VerfiyEmail from './pages/VerfiyEmail'
import Profile from './pages/Profile'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/><Footer/></>
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
  {
    path: '/profile',
    element: <><Navbar/><Profile/><Footer/></>
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