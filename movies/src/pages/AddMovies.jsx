import React from 'react'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
export const AddMovies = (title) => {
    useEffect(() => {
        document.title = title;
    })
    const navi = useNavigate();
    return (
        <>
            <main className="container">
                    <div className="bg-body-tertiary p-5 border mb-5">
                        <h3 className="text-primary">ADD YOUR MOVIES</h3>
                        <p className="lead">Post your fav movies to everybody</p>
                        <button className="btn btn-primary" onClick={() => { navi("/movies/fill"); }}>ADD TO EXPLORE</button>
                    </div>
              
            </main>
        </>
    )
}

