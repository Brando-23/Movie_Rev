import React from 'react'
import { useNavigate } from "react-router-dom";
export const AddMovies = (title) => {
 
    const navi = useNavigate();
    return (
        <>
            <main className="container">
                    <div className="bg-body-tertiary p-5 border mb-5">
                        <h3 className="text-primary">USER DASHBOARD</h3>
                        <p className="lead">MY REVIEWS</p>
                        <button className="btn btn-primary" onClick={() => { navi("/movies/fill"); }}>ADD TO EXPLORE</button>
                    </div>
              
            </main>
        </>
    )
}

