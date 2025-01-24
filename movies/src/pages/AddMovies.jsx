

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import Backup from "../assets/backup.jpg";

// Register required Chart.js components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const AddMovies = () => {
  const Barcharts = ({ reviews }) => {
    const ref1 = useRef(null); // Reference for canvas
    const reff = useRef(null); // Reference for the Chart instance

    useEffect(() => {
      if (reviews.length > 0) {
        const bars = ref1.current.getContext("2d");

        // Destroy the previous chart instance to avoid multiple chart renderings
        if (reff.current) {
          reff.current.destroy();
        }

        // Create the Chart instance
        reff.current = new Chart(bars, {
          type: "bar",
          data: {
            labels: reviews.map((review) => ` ${review.title}`),
            datasets: [
              {
                label: "Ratings",
                data: reviews.map((review) => review.rating),
                backgroundColor: "#1dd1a1",
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
          },
        });
      }

      return () => {
        // Cleanup to destroy the chart instance
        if (reff.current) {
          reff.current.destroy();
        }
      };
    }, [reviews]); // Add reviews as dependency

    return <canvas ref={ref1} width={400} height={400}></canvas>;
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  return (
    <main className="container mt-5">
        <h4 className="text-dark py-2 border-bottom mb-3 fw-bold">USER REVIEWS</h4>
        <div style={{width:"50%",height:"2%"}}>
        <Barcharts reviews={reviews} />
        </div>
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

