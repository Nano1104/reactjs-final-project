import { Link } from "react-router-dom"

export default function Home() {
  return(
    <>
      <div id="icon">
        <span>Artemis</span>
      </div>
      <div className="flex justify-center items-center">
        <h1 id="home-title">Music Int.</h1>
      </div>
      <Link to="/productos" className="text-white">Ver Instrumentos</Link>
    </>
  )
}