import React, { useEffect, useState } from 'react'

export const usefetch = (apipath,queryterm="") => {
    const [data, setData] =useState([]);
    const key=import.meta.env.VITE_API_KEY;
    console.log(key);
    const url=`https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryterm}`;
    console.log(url);
    useEffect(() => {
        async function fetchmovie() {
            try {
                const response = await fetch(url);
                // Check if the response status is OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                // Ensure the expected structure exists
                if (jsonData && jsonData.results) {
                    setData(jsonData.results);
                } else {
                    throw new Error("Unexpected JSON structure");
                }
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }
        fetchmovie();
    }, [url]);
    
    return {data};
  
}

