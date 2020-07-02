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
   type:"all",
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
    // set maxPrice and maxSize from data which would be set to state  
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));


    this.setState({
      rooms,
       featuredRooms, 
       sortedRooms:rooms, 
       loading:false,
       price:maxPrice,
       maxPrice,
       maxSize,
       


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
    
    const value = event.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    // console.log(name,value);
    // Set name state to be the value property dynamically
    this.setState({
      [name]:value},
      this.filterRooms)

      console.log(` name${name}  `);
      
      }
     
  // Filtered Rooms 
  filterRooms = () => {
    let {
      rooms, type, capacity, price, minSize, maxSize, breakfast, pets }
      = this.state

      
      // Get all Rooms 
    let tempRooms = [...rooms];
      // Transform capacity from String to Number
      capacity = parseInt(capacity);

      //filter by type 
    if(type !== 'all') {
     tempRooms = tempRooms.filter(room => room.type === type);
    }

      // Filter by capacity 
      if(capacity != 1 ) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }


    this.setState({
      sortedRooms: tempRooms
    });
    };

  
  


  
  
  render() {
    return (
      // Make Values Available to the RoomContext
      <RoomContext.Provider value={{
        ...this.state, 
        getRoom:this.getRoom,
        handleChange: this.handleChange   
        }}>
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