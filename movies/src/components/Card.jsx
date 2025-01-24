import { Link } from "react-router-dom"
import Backup from "../assets/backup.jpg";


export const Card = ({movie}) => {
  const {poster_path,id,overview,title,vote_average,vote_count}=movie;
  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:Backup;
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
        <img src={image} alt="" className="card-img-top"/>

          <div className="card-body">
            <h5 className="card-title text-dark text-overflow-1 fw-bold">{title}</h5>
            <p className="card-text text-overflow-2">{overview}</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/movies/${id }`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>
              <small>
                <i className="bi bi-star-fill text-warning"></i>{vote_average} | {vote_count}
              </small>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Backup from "../assets/backup.jpg";

// export const Card = ({ movie, onFilterChange, isFilterVisible = false }) => {
//   const { poster_path, id, overview, title, vote_average, vote_count } = movie || {};
//   const image = poster_path
//     ? `https://image.tmdb.org/t/p/original${poster_path}`
//     : Backup;

//   const [showFilters, setShowFilters] = useState(false);

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     onFilterChange(e.target.name, e.target.value); // Pass filter changes to parent
//   };

//   // Only render the filter dropdown when `isFilterVisible` is true
//   if (isFilterVisible) {
//     return (
//       <div className="position-relative">
//         <i
//           className="bi bi-filter-circle-fill text-primary fs-3 me-3 mt-2"
//           style={{ cursor: "pointer" }}
//           onClick={() => setShowFilters(!showFilters)}
//         ></i>
//         {showFilters && (
//           <div
//             className="card p-3 position-absolute top-100 end-0"
//             style={{ zIndex: 1000, width: "200px" }}
//           >
//             <h6 className="text-dark">Filters</h6>
//             <div className="mb-2">
//               <label className="form-label">Sort By:</label>
//               <select
//                 className="form-select"
//                 name="sort_by"
//                 onChange={handleFilterChange}
//               >
//                 <option value="popularity.desc">Popularity (High to Low)</option>
//                 <option value="popularity.asc">Popularity (Low to High)</option>
//                 <option value="vote_average.desc">Rating (High to Low)</option>
//                 <option value="vote_average.asc">Rating (Low to High)</option>
//               </select>
//             </div>
//             <div className="mb-2">
//               <label className="form-label">Genre:</label>
//               <select
//                 className="form-select"
//                 name="with_genres"
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All</option>
//                 <option value="28">Action</option>
//                 <option value="35">Comedy</option>
//                 <option value="18">Drama</option>
//                 <option value="27">Horror</option>
//               </select>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // Render movie card
//   return (
//     <div className="col">
//       <div className="card shadow-sm">
//         <img src={image} alt="" className="card-img-top" />

//         <div className="card-body">
//           <h5 className="card-title text-dark text-overflow-1 fw-bold">{title}</h5>
//           <p className="card-text text-overflow-2">{overview}</p>
//           <div className="d-flex justify-content-between align-items-center">
//             <Link
//               to={`/movies/${id}`}
//               className="btn btn-sm btn-outline-primary stretched-link"
//             >
//               Read More
//             </Link>
//             <small>
//               <i className="bi bi-star-fill text-warning"></i>
//               {vote_average} | {vote_count}
//             </small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

