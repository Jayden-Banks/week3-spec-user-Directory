import './Header.css'
import { Link } from "react-router-dom";


export function Header() {
  return(
    <header>
      <nav id="nav-header">
        <div id="div-nav-home"><Link className="links" to="/">Home</Link></div>
        <div id="div-nav-card"><Link className="links" to="/card">Card</Link></div>
      </nav>
    </header>
  )
}