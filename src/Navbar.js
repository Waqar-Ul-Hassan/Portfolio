import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav className="nav">
      <Link to="/" className="site-title">
        Waqar Ul-Hassan
      </Link>
      <ul>
        <CustomLink to="/about"><div className="navAb">About</div></CustomLink>
        <hr />
        <CustomLink to="/projects"><div className="navProj">Projects</div></CustomLink>
        <hr />
        <CustomLink to="/experience"><div className="navExp">Experience</div></CustomLink>
        <hr />
        <a target="_blank" style={{backgroundColor:"transparent"}} href="/Ul-Hassan_Waqar_June_2023_Resume.pdf"><button className="navResume">Resume</button></a>
        
      </ul>
    </nav>
    </>
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