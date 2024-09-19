import React from 'react'
import './Home.css' // Importing the CSS file for Home component styling

// Importing components and assets
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'> {/* Main home page container */}
        <Navbar/> {/* Navbar component */}

        <div className="hero"> {/* Hero section for the main banner */}
            <img src={hero_banner} alt='' className='banner-img'/> {/* Hero banner image */}

            <div className="hero-caption"> {/* Caption content over the hero banner */}
                <img src={hero_title} alt='' className='caption-img' /> {/* Title image */}
                <p> {/* Hero description */}
                    Discovering his ties to a secret ancient order, a young man living
                    in modern Istanbul embarks on a quest to save the city 
                    from an immortal enemy.
                </p>

                <div className="hero-btns"> {/* Buttons under the hero description */}
                    <button className='btn'><img src={play_icon} alt='' />Play</button> {/* Play button with icon */}
                    <button className='btn dark-btn'><img src={info_icon} alt='' />More Info</button> {/* More Info button with icon */}
                </div>

                <TitleCards/> {/* TitleCards component, displaying additional movie cards */}
            </div>
        </div>

        <div className="more-cards"> {/* Section for additional card categories */}
            {/* Multiple TitleCards components with different titles and categories */}
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards title={"Only on Netflix"} category={"popular"}/>
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
        </div>

        <Footer/> {/* Footer component */}
    </div>
  )
}

export default Home
