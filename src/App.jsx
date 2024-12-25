import { Route, Routes } from "react-router-dom"
import './components.css'
import './style.css'

import Home from "./pages/Home"
import About from "./pages/About"
import Features from "./pages/Features"
import Forum from "./pages/Forum"
import Marketplace from "./pages/Marketplace"
import Register from "./forms/register"
import Login from "./forms/login"

export default function App() {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
