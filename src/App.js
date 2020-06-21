import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
   <>
     <Router>
     <Navbar /> 
       <Switch>
        
       <Route path ="/" exact component={Home} />
       <Route path ="/rooms" exact component={Rooms} />
       {/* Route parameters, : acts as a wild card  */}
       <Route path ="/rooms/:single" exact component={SingleRoom} />
        {/* with the switch tag return any path that's not matched */}
        <Route component={Error} /> 

       </Switch>

     </Router> 
   </>
  );
}

export default App;
