import React, { Component } from 'react';
import items from './data';




const RoomContext = React.createContext();
  // Context is designed to share data that can be considered “global” for a tree of React component
  // we can avoid passing props through intermediate elements



class RoomProvider extends Component {

  // Set Up Global Context store for rooms 
  // Set Up initial query parameters 
  state = { 
   rooms: [],
   sortedRooms:[],
   featuredRooms:[],
   loading:true,
   type:'all',
   capacity:1,
   price:0,
   minPrice:0,
   minSize:0,
   maxSize:0,
   breakfast:false,
   pets:false
  };
  
  
  // Set up getData Function 

  // format items to get a normal object on mount  
  componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true);
    // Set max price from avaliable data 
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));


    this.setState({
      rooms,
       featuredRooms, 
       sortedRooms:rooms, 
       loading:false,
       price:maxPrice,
       maxPrice,
       maxSize


    })
  }

  // Format data 
  formatData(items) {
    let tempItems = items.map(item => {
  let id = item.sys.id;
  let images = item.fields.images.map(image => image.fields.file.url);
  
  let room = {...item.fields, images,id }
  return room;

    })
    return tempItems
  }
  
  

  // Set Up getRoom from Slug Parameter / Query 
  getRoom = slug => {
      // Set tempRooms as Rooms 
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room; 
  }


  // Handle change for search parameter 
  handleChange = event => { 
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type,name,value);



  }

  // Filtered Rooms 
  filterRooms = () => {
    console.log('hello')
  }


  
  
  render() {
    return (
      // Make Values Available to the RoomContext
      <RoomContext.Provider value={{...this.state, getRoom:this.getRoom}}>
       {this.props.children}
      </RoomContext.Provider>
    )
  }
}


const RoomConsumer = RoomContext.Consumer; 

// Using HIgher Order Component to pass Data 
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
 

export { RoomProvider, RoomContext, RoomConsumer };