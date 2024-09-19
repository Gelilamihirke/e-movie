import React, { useEffect, useState } from 'react'
import './Player.css' // Importing the CSS file for Player component styling
import back_arrow_icon from '../../assets/back_arrow_icon.png' // Importing the back arrow icon
import { useNavigate, useParams } from 'react-router-dom' // Importing necessary hooks from react-router-dom

const Player = () => {

  const {id} = useParams(); // Extract the movie ID from the URL parameters
  const navigate = useNavigate(); // Hook for programmatic navigation
 
  const [apiData, setApiData] = useState({ // State to hold movie trailer data
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  // Options for the API request, including the Authorization header
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGIxZDBiYTAxNjg3NDcxNDJiOGQwYjc0MjhmNzYzNiIsIm5iZiI6MTcyNjU2OTU2My45MTM3NzgsInN1YiI6IjY2ZTM4NTU1OTAxM2ZlODcyMjIzY2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCo_tmXMeHt_xsNPpipQ3gGDYcv1OzegM5mb1tcVnFo'
    }
  };

  // Fetching the trailer video from the API when the component mounts
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json()) // Parse the response as JSON
      .then(response => setApiData(response.results[0])) // Set the first result as the trailer data
      .catch(err => console.error(err)); // Log any errors
  }, []) // Empty dependency array to run only once when the component mounts
 
  return (
    <div className='player'> {/* Main player container */}
      <img src={back_arrow_icon} alt='' onClick={() => { navigate(-2) }} /> {/* Back arrow to go back two pages */}

      {/* Embedding YouTube trailer video */}
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`} // Embeds the trailer using the key from API data
        title='trailer' frameBorder='0' allowFullScreen ></iframe>

      <div className="player-info"> {/* Displaying trailer information */}
        <p>{apiData.published_at.slice(0, 10)}</p> {/* Display the published date */}
        <p>{apiData.name}</p> {/* Display the trailer name */}
        <p>{apiData.type}</p> {/* Display the type of video */}
      </div>
    </div>
  )
}

export default Player
