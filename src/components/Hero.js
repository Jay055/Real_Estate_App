import React from 'react'

// Hero props for style changing , Children for rendering 
const Hero = ({hero, Children}) => {
  return (
    <div className={hero}>
      {Children}
    </div>
  )
  

  
}

// Render class name depending on the page to be displayed 
Hero.defaultProps = {
  hero: "defaultHero"
}



export default Hero;