import Navbar from "./Navbar"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom"


function App() {
// banana boat
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App