import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero>
        
      <Banner title="Welcome" subtitle="Rent Rooms for 294$" 
      >
      
      <Link to ="/rooms" className="btn-primary">
        Check rooms
      </Link>

      </Banner>
      </Hero>

    </div>
  )
}



export default Home; 