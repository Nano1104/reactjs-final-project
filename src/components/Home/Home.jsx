import { Link } from "react-router-dom"
import 'animate.css';

export default function Home() {
  return(
    <>
      <div className="bg-home">
        <div>
          <h1 id="home-title">Music Int.</h1>
        </div>
        <Link to="/productos" id="btn-home">Ver Instrumentos</Link>
      </div>
    </>
  )
}