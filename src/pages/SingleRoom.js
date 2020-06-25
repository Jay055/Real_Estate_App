import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

import { RoomContext}  from '../Context';


class SingleRoom extends Component {
  // Access the URL parameter passed in by the slug. 
    constructor(props){
      super(props);
   
      console.log(this.props) // componentDidMount()
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
    const {name, description, capacity, size, price, extras, breakfast, pets,images} = room
    return (
      <Hero hero='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to = '/rooms' className="btn-primary">
            Back to Rooms 
          </Link>

        </Banner>
      <div>
        Hello from single room page         
      </div>
      </Hero>
    )
  }
}

export default SingleRoom;