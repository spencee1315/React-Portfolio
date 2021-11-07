import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="cf">
        <ul className="cf">
          <li>
            <Link to="/">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/social" id="openup">SOCIAL</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;