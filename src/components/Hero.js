import React from 'react'

// Hero props for style changing , children for rendering 
const Hero = ({hero, children}) => {
  return (
    <div className={hero}>
      {children}
    </div>
  )
  

  
}

// Render class name depending on the page to be displayed 
Hero.defaultProps = {
  hero: "defaultHero"
}



export default Hero;