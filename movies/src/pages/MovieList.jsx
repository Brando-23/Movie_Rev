// import { useEffect } from "react"
// import Backup from "../assets/godfather.png";
// import { Card } from "../components/Card";
// import { usefetch } from "../hooks/usefetch";

// export const MovieList = ({ title, apipath }) => {

//   const { data: movies } = usefetch(apipath);
//   useEffect(() => {
//     document.title = title;
//   })

//   return (
//     <>
//       <div>
//         <main className="conatiner">
         
//           <h2 className="text-dark py-4 border-bottom text-center fw-bold" style={{ textDecoration: 'underline red' }}>{title}</h2>
//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
//             {movies.map((movie) => {
//               return <Card key={movie.id} movie={movie} />;
//             })}
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }

import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";

export const MovieList = ({ title, apipath }) => {
  // State to manage filters
  const [filters, setFilters] = useState({
    sort_by: "popularity.desc", // Default sorting
  });

  // Update document title
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Update filters dynamically
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Fetch movies with filters
  const { data: movies, loading, error } = usefetch(apipath, "", filters);

  return (
    <>
      <div>
        <main className="container">
          {/* Page Title */}
          <div className="d-flex justify-content-between align-items-center">
            <h2
              className="text-dark py-4 fw-bold"
              style={{
                textDecoration: "underline red",
              }}
            >
              {title}
            </h2>

            {/* Filter Icon */}
            <div>
              <Card
                movie={{}} // Empty object to prevent rendering
                onFilterChange={handleFilterChange}
                isFilterVisible={true} // Only show the filter dropdown here
              />
            </div>
          </div>

          {/* Movies Grid */}
          {loading && <p>Loading movies...</p>}
          {error && <p>Error: {error}</p>}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

