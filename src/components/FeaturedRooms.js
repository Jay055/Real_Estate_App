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
    
    const { featuredRooms: rooms} = this.context
    
    console.log(rooms)
    return (
      <div>
        <Title title = "Featured Room"/>
       
        <Room />
        <Loading />
      </div>
    )
  }
}
