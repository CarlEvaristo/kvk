import React from "react"
import NavBar from "./components/NavBar/Navbar"
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import { Routes, Route } from "react-router-dom"

export default function App() {

  return (
      <div className="app">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/companies/:id" element={<Detail />} />
          </Routes>
      </div>
  )
} 
