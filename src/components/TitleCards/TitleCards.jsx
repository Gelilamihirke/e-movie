import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css'; // Importing the CSS file for TitleCards styling
import cards_data from '../../assets/cards/Cards_data'; // Importing local card data (if used for fallback)
import { Link } from 'react-router-dom'; // Importing Link for navigation

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]); // State to hold the fetched movie data
  const cardsRef = useRef(); // Ref to access the card list for scroll manipulation

  // API authorization and configuration
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGIxZDBiYTAxNjg3NDcxNDJiOGQwYjc0MjhmNzYzNiIsIm5iZiI6MTcyNjU2OTU2My45MTM3NzgsInN1YiI6IjY2ZTM4NTU1OTAxM2ZlODcyMjIzY2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCo_tmXMeHt_xsNPpipQ3gGDYcv1OzegM5mb1tcVnFo'
    }
  };

  // Handle horizontal scrolling using the mouse wheel
  const handleWheel = (event) => {
    event.preventDefault(); // Prevent default vertical scroll behavior
    cardsRef.current.scrollLeft += event.deltaY; // Scroll the cards horizontally
  };

  // Fetch movie data when the component mounts
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json()) // Parse the response
      .then(response => setApiData(response.results)) // Store the movie data in state
      .catch(err => console.error(err)); // Log any errors

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel); // Add wheel event listener to enable horizontal scrolling
    }

    // Clean up event listener when the component unmounts
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel); // Remove event listener to avoid memory leaks
      }
    };
  }, [category]); // Re-run the effect when the category changes

  return (
    <div className="titlecards"> {/* Main container for title cards */}
      <h2>{title ? title : "Popular on Netflix"}</h2> {/* Display title or fallback text */}
      <div className="card-list" ref={cardsRef}> {/* Container for the list of cards */}
        {apiData.map((card, index) => { // Map through the movie data and render each card
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}> {/* Link to the movie player page */}
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" /> {/* Movie poster */}
              <p>{card.original_title}</p> {/* Movie title */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
