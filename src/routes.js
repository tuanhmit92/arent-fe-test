import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/home"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <div>Login</div>
  }
])
export default routes