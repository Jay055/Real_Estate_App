import React, { Component } from 'react'
import { RoomContext } from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
  // Set Up Context type 
  static contextType = RoomContext
  render() {
    // Set up context value with this.context
    
    let { loading, featuredRooms: rooms} = this.context
    
    rooms = rooms.map(room => {
      return <Room key={room.id} room = {room} />
    })
    console.log(rooms)
    return (
      <section className="featured-rooms">
        <Title title = "Featured Room"/>
        <div className="featured-rooms-center">
          {/*  Set Up for Loading */}
          {loading ? <Loading /> : rooms}


        </div>
      
       </section>
    )
  }
}
