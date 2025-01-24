
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/backup.jpg";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [message, setMessage] = useState("");
  const params = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : Backup;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setMovie(jsonData);
    }
    fetchMovie();
  }, [url]);

  useEffect(() => {
    // Load saved reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const movieReviews = storedReviews.filter(review => review.movieId === params.id);
    setReviews(movieReviews);
  }, [params.id]);

  const submitReview = () => {
    if (!userReview.trim() || userRating === 0) {
      setMessage("Please enter a review and select a rating.");
      return;
    }

    // Save rating and review to localStorage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const newReview = {
      movieId: params.id,
      review: userReview,
      rating: userRating,
      timestamp: new Date().toISOString(),
    };

    storedReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    setMessage("Review and rating submitted successfully!");
    setUserReview("");
    setUserRating(0); // Reset rating
  };

  return (
    <>
      <main className="container">
        <h4 className="text-dark py-2 border-bottom mb-3 fw-bold">{movie.title}</h4>
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="img-fluid img-thumbnail" />
          </div>
          <div className="col-md-8">
            <h3 className="text-primary">{movie.title}</h3>
            <p className="mt-3">{movie.overview}</p>
            {movie.genres && (
              <p className="d-flex gap-3">
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="badge bg-warning">
                    {genre.name}
                  </span>
                ))}
              </p>
            )}
            <h4 className="mt-2">
              <i className="bi bi-star-fill text-warning"></i> {movie.vote_average}{" "}
              <i className="bi bi-people-fill text-success"></i> {movie.vote_count} Reviews
            </h4>
          </div>
        </div>

        {/* Submit Review Form */}
        <div className="mt-5">
          <h4>Submit Your Review</h4>
          <textarea
            rows={4}
            cols={50}
            className="form-control mb-3"
            placeholder="Write your review here..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          ></textarea>

          <h5>Rate the Movie</h5>
          <select
            value={userRating}
            onChange={(e) => setUserRating(Number(e.target.value))}
            className="form-select w-auto mb-3"
          >
            <option value={0}>Select a rating</option>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <button className="btn btn-success" onClick={submitReview}>
            Submit Review
          </button>
          {message && <p className="mt-3 text-info">{message}</p>}
        </div>

        {/* Display Reviews */}
        <div className="mt-5">
          <h4>User Reviews</h4>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <p className="card-text">{review.review}</p>
                  <p className="text-muted">
                    <i>Rating: {review.rating}</i>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No reviews available for this movie.</p>
          )}
        </div>
      </main>
    </>
  );
};
