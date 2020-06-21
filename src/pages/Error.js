import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="Error" subtitle="Go back to home page">
          <Link to="/" className="btn-primary">
            Home Page
          
          </Link>
          </Banner>
      </Hero>
      
      
      
    </div>
  )
}


export default Error;