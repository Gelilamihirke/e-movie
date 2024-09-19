import React, { useEffect } from 'react'
import Home from './pages/Home/Home' // Importing the Home page component
import { Routes, Route, useNavigate } from 'react-router-dom' // Importing routing components and hook for navigation
import Login from './pages/Login/Login' // Importing the Login page component
import Player from './pages/Player/Player' // Importing the Player page component
import { onAuthStateChanged } from 'firebase/auth' // Importing Firebase auth state change handler
import { auth } from './firebase' // Importing Firebase authentication instance

const App = () => {

  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  // Effect to check authentication state when the component mounts
  useEffect(() => {
    // onAuthStateChanged is triggered whenever the authentication state changes
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/'); // Navigate to the home page if the user is authenticated
      } else {
        console.log("Logged Out");
        navigate('/login'); // Navigate to the login page if the user is not authenticated
      }
    })
  }, []) // Empty dependency array to ensure it runs only once when the component mounts

  return (
    <div>
      <Routes>
        {/* Define the different routes for the application */}
        <Route path='/' element={<Home />} /> {/* Home route */}
        <Route path='/login' element={<Login />} /> {/* Login route */}
        <Route path='/player/:id' element={<Player />} /> {/* Player route, dynamic :id to show a specific movie */}
      </Routes>
    </div>
  )
}

export default App
