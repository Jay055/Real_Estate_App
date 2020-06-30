import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

import Loading from './Loading';
// withRoomConsumer Higher Order Component 
import { withRoomConsumer } from '../Context';



const RoomContainer = ({context}) => {
  const {loading, sortedRooms, rooms} = context
  
    if(loading){
      return <Loading />
      }
      return (
        <>
          <RoomFilter rooms={rooms} />
          <RoomList rooms={sortedRooms} />
    
        </>
      )
      }

export default  withRoomConsumer(RoomContainer);






// import React from 'react'
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer}  from '../Context';
// import Loading from './Loading';


// // Using Consumer to access data (Room Consumer), use value from context 
 
// export default function RoomContainer() {
//   return (
//     <>
//     <RoomConsumer>
  
//       {
//       (value) => {
//       const {loading, sortedRooms, rooms} = value
//       // console.log(value)
//       if(loading){
//         return <Loading />
//       }
//       return (
//         <div>
//           <RoomFilter rooms={rooms} />
//           <RoomList rooms={sortedRooms} />

//         </div>
//       );
//     }
//   }    
//     </RoomConsumer>
  
//     </div>
//   )
// }






//  Nexted Block is redundant error: You need to remove some nested {}