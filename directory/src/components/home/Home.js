import './Home.css'
import { Link } from "react-router-dom";

export function Home() {

  return (
    <div id="div-homepage">
      <div id="div-homepage-rect">
        <div id="div-homepage-text">
          <h2>Welcome To This User Directory Assignment</h2>
          <p>
            This app allows you to see information cards on 25 people that includes where they're from, their job titles, employeers and favorite movies.
          </p>
        </div>
        <Link to="/card"><button id="button-homepage">Click To Begin</button></Link>
      </div>

    </div>
  )
}