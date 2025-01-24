
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backup from "../assets/backup.jpg";

export const AddMovies = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  return (
    <main className="container mt-5">
      <h4 className="text-dark py-2 border-bottom mb-3 fw-bold">User Reviews</h4>

      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    review.poster
                      ? `https://image.tmdb.org/t/p/original${review.poster}`
                      : Backup
                  }
                  className="img-fluid img-thumbnail"
                  alt={review.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{review.title}</h5>
                  <p className="card-text">{review.review}</p>
                  <p className="text-muted">
                    <i>Rating: {review.rating}</i>
                  </p>
                  <p className="text-muted">
                    <i>Submitted on: {new Date(review.timestamp).toLocaleString()}</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted">No reviews available.</p>
      )}

      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </main>
  );
};

