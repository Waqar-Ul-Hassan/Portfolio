import Navbar from "./Navbar"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { Route, Routes } from "react-router-dom"
import Main from "./Background/Main"

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
        </Routes>
      </div>
      <Main />
    </>
  )
}

export default App