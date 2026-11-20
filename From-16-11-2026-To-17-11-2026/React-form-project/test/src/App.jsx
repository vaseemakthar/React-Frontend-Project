import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Basic from "./pages/Basic";
import Contact from "./pages/Contact";
import SystemAdmin from "./pages/SystemAdmin";
import './App.css'
import './login.css'
import './signup.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/system-admin" element={<SystemAdmin />} />
      </Routes>
    </>
  )
}

export default App
