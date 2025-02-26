import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md fixed-top bg-secondary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"><h3><i class="bi bi-film"></i>MOVIEREVS</h3></NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/movies/top" className="nav-link">Top Movies</NavLink></li>
            <li className="nav-item"><NavLink to="/movies/upcoming" className="nav-link">My Reviews</NavLink></li>
          </ul>

          {/* inga filter varanuminga filter varanum */}
          {/* <form action="#">
            <input type="search" className="form-control" placeholder="search"/>
          </form> */}
        </div>
      </div>

    </nav>
    </>
  )
}

