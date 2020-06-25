import styled from 'styled-components'
// Documentation 
import defaultImg from '../images/room-1.jpeg';
// Render specific room slug images uniquely with styled components  

// We assign styled components to props this way, passing the default if it's not found 

const StyledHero = styled.header `
min-height: 60vh;
background: url(${props => props.img?props.img:defaultImg}  ) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`





export default StyledHero; 
