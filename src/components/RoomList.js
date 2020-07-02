import React from 'react';
import Room from './Room';

// Display sorted Rooms from the search parameter
//  Get Rooms as prors from RoomContainer
const RoomList = ({rooms}) => {
  if(rooms.length === 0){
    return ( 
      <div className="empty-search">
        <h3>No rooms matched your search parameters</h3>
      </div>
    )
  }
  return (
    <>
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
        return  <Room key={item.id} room={item} />
        })}
      </div>
        Room List       
    </section>
    </>
  )
}


export default RoomList