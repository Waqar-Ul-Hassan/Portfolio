import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Waqar Ul-Hassan
      </Link>
      <ul>
        <CustomLink to="/projects"><div className="navProj">Projects</div></CustomLink>
        <CustomLink to="/about"><div className="navAb">About</div></CustomLink>
        <CustomLink to="/resume"><div className="navRes">Resume</div></CustomLink>
        <CustomLink to="/contact"><div className="navCont">Contact</div></CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}