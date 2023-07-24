import Navbar from "./Navbar"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Experience from "./Pages/Experience"
import { Route, Routes } from "react-router-dom"
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    
    </>
  )
}

export default App