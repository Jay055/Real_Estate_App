import React, { Component } from 'react';
import items from './data';




const RoomContext = React.createContext();
  // Context is designed to share data that can be considered “global” for a tree of React component
  // we can avoid passing props through intermediate elements



class RoomProvider extends Component {

  // Set Up Global Context store for rooms 
  state = { 
   rooms: [],
   sortedRooms:[],
   featuredRooms:[],
   loading:true,
  };
  
  
  // Set up getData Function 

  // format items to get a normal object on mount  
  componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true);

    this.setState({
      rooms,
       featuredRooms, 
       sortedRooms:rooms, 
       loading:false
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
  



  
  
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
       {this.props.children}
      </RoomContext.Provider>
    )
  }
}


const RoomConsumer = RoomContext.Consumer; 

export { RoomProvider, RoomContext, RoomConsumer };