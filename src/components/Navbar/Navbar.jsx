import React, { useEffect, useRef } from 'react'
import './Navbar.css' // Importing the CSS file for Navbar styling

// Importing assets
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase' // Importing logout function from Firebase

const Navbar = () => {

    const navRef = useRef(); // Using a ref to access and manipulate the navbar element

    // Adding a scroll event listener to change navbar color when scrolled
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) { 
                navRef.current.classList.add('nav-dark') // Adding a class for dark background on scroll
            } else {
                navRef.current.classList.remove('nav-dark') // Removing the class when scrolled back to top
            }
        })
    }, []) // Empty dependency array ensures the event listener is added only once

  return (
    <div className='navbar' ref={navRef}> {/* Navbar container with ref */}
        <div className="navbar-left"> {/* Left side of the navbar */}
            <img src={logo} alt="" /> {/* Netflix logo */}
            <ul> {/* Navigation links */}
                <li>Home</li>
                <li>Tv Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>

        <div className="navbar-right"> {/* Right side of the navbar */}
            <img src={search_icon} alt="" className='icons' /> {/* Search icon */}
            <p>Children</p> {/* "Children" profile */}
            <img src={bell_icon} alt="" className='icons' /> {/* Notification bell icon */}
            
            <div className="navbar-profile"> {/* Profile section with dropdown */}
                <img src={profile_img} alt="" className='profile' /> {/* Profile image */}
                <img src={caret_icon} alt="" /> {/* Caret icon */}
                
                <div className="dropdown"> {/* Dropdown menu */}
                    <p onClick={() => logout()}>Sign Out of Netflix</p> {/* Sign out button */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
