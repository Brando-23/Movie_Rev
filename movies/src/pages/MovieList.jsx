import { useEffect } from "react"
import Backup from "../assets/godfather.png";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";

export const MovieList = ({ title, apipath }) => {

  const { data: movies } = usefetch(apipath);
  useEffect(() => {
    document.title = title;
  })

  return (
    <>
      <div>
        <main className="conatiner">
         
          <h2 className="text-dark py-4 border-bottom text-center fw-bold" style={{ textDecoration: 'underline red' }}>{title}</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </main>
      </div>
    </>
  )
}
