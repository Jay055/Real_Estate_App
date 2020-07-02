import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';


// Get Unique values (arrayofitems, types of unique values)
const getUnique = (items,value) => {
  // Set Only accepts unique values 
  return [...new Set(items.map(item => item[value]))];
}


 
// Get props from RoomContainer
export const RoomFilter = ({rooms}) =>  {
  // console.log(rooms);
  // Using Hooks
  const context = useContext(RoomContext); 

  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } =  context;  

    // Get Unique Types from Data  
    let types = getUnique(rooms, 'type');
    // all types 
    types = ["all rooms",...types];
    // Map Types to the select option 
    types = types.map((item,index)=>{
      return <option value={item} key={index}>
        {item}
      </option> 
    })
    console.log(type)
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=> {
    return <option key = {index} value={item}>{item}</option>
      })

  
  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* select type  */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
        
        <select 
        // name should be same with the type in the state
        name="type"
        id="type"
        value={type}
        // {type}
        className="form-control"
        onChange={handleChange}
        >
          {types}
        </select>
        </div>
        {/*  end select type  */}

        
        
         {/*  Guests  */}
         <div className="form-group">
          <label htmlFor="capacity">Guests</label>
        
        <select 
        // name should be same with the type in the state
        name="capacity"
        id="capacity"
        value={capacity}
        // {type}
        className="form-control"
        onChange={handleChange}
        >
          {people}
        </select>
        </div>
        {/*  end select type  */}
      </form>
    </section>
  )
}

export default RoomFilter
//  Filtered Rooms: Add to the Provider state 

