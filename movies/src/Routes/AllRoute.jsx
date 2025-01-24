import { Routes,Route } from "react-router-dom"
import { AddMovies, MovieDetails, MovieList, Search } from "../pages"


const AllRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList title="GREATEST ENTERTAINMENT" apipath="movie/now_playing"/>}></Route>
            <Route path="movies/top" element={<MovieList title="TOP MOVIES" apipath="movie/top_rated"/>}></Route>
            <Route path="movies/upcoming" element={<AddMovies title="upcoming Movies" apipath=""/>}></Route>
            <Route path="movies/:id" element={<MovieDetails/>}></Route>
            <Route path="movies/fill" element={<Search/>}></Route>
            
        </Routes>
    </>
  )
}

export default AllRoute