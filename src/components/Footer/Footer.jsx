import React from 'react'
import './Footer.css' // Importing the CSS file for Footer styling

// Importing social media icons
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'> {/* Main footer container */}
      
      <div className="footer-icons"> {/* Social media icons section */}
        <img src={facebook_icon} alt=''/> {/* Facebook icon */}
        <img src={instagram_icon} alt=''/> {/* Instagram icon */}
        <img src={twitter_icon} alt=''/> {/* Twitter icon */}
        <img src={youtube_icon} alt=''/> {/* YouTube icon */}
      </div>

      <ul> {/* Footer links section */}
        <li>Auto Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='Copyrigth-text'> {/* Footer copyright text */}
        © 1997-2023 Netflix, 
      </p>

    </div>
  )
}

export default Footer
