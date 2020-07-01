import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';


// Get Unique values (arrayofitems, types of unique values)
const getUnique = (items,value) => {
  // Set Only accepts unique values 
  return [...new Set(.map(item => item[value]))];
}

// Get props from RoomContainer
export default function RoomFilter(rooms) {
  console.log(rooms);
  // Using Hooks
  const context = useContext(RoomContext); 
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } =  context;  

    // get unique types 
    // let types = getUnique(rooms, 'type');
    // all types 
    // types = ['all',...types];
    // map to jsx
    // types = types.map((item,index)=>{
    //   return <option value={item} key={index} />
    // })
  
  return (
    <section className="filter-container">
      <Title tile="seach rooms"/>
      <form className="filter-form">
        {/* select type  */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
        
        <select 
        name="type"
        id="type"
        value='TYE'
        // {type}
        className="form-control"
        onChange={handleChange}
        >
          {/* {types} */}
        </select>
        </div>
        {/*  end select type  */}
      </form>
    </section>
  )
}



//  Filtered Rooms: Add to the Provider state 

