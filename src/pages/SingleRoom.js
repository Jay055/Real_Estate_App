import React, { Component, Fragment } from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero'; 

import { RoomContext}  from '../Context';


class SingleRoom extends Component {
  // Access the URL parameter passed in by the slug. 
    constructor(props){
      super(props);
   
      // console.log(this.props) // componentDidMount()
      this.state = { 
       
        slug: this.props.match.params.slug,
        defaultBcg: defaultBcg,
      }


    }
     // Set Up Context Type 
    static contextType = RoomContext; 
    // componentDidMount(){

   
 
  render() {
    // Set Up Context Value 
    const { getRoom } = this.context;
 
    const room = getRoom(this.state.slug);
    // console.log(room);
    if(!room){
      return <div className="error">
        <h3> Room not found </h3>
        <Link to ='/rooms' className="btn-primary">
          Back to Rooms 
        </Link>
      </div>
    }
   
    // Destructure from room 
    const {name, description, capacity, size, price, extras, breakfast, pets,images,index} = room

    const displayRoom = images.map((image, item) => (
      <img key={index} src ={image} alt={name}/>
    ))

    const displayExtras = extras.map((item,index)=> (
      <li key={index}>{item}</li>
    ))
    return (
      <Fragment>
      <StyledHero img={images[0] || this.state.defaultBcg} hero='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to = '/rooms' className="btn-primary">
            Back to Rooms 
          </Link>

        </Banner>
      <div>
          <div >
      
          </div>
      </div>
      
      </StyledHero>
      <section className="single-room">
      <div className="single-room-images">
        
          {displayRoom}
       </div>
       <div className="single-room-info">
         <article className="desc">
          <h3>details</h3>
          <p>{description}</p> 
         </article>
         <article className="info">
           <h3> info</h3>
           <h6> price : ${price}</h6>
           <h6> size: ${size} SQFT</h6>
           <h6> 
             max capacity: 
             {(capacity>1)? `${capacity}  people`:`${capacity} person`} 
               
           </h6>
           <h6>{pets?"pets allowed":"no pets allowed"}</h6>
          <h6>{breakfast && "free breakfast meals"}</h6>
         </article>
       </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
           {displayExtras}
            
          </ul>
        </section>

   
    

    </Fragment>
    )
  }
}

export default SingleRoom;