import React, {Component} from 'react'
import Title from './Title';
import {FaCockTail, FaHiking, FaShuttleVan, FaBeer, FaCocktail} from 'react-icons/fa'


class Services extends Component{
 state={
   services:[
  {  icon:<FaCocktail/>,
   title: "free cocktails",
   info: "Get Free cocktails whenever you spend a night with us "
  },
  {  icon:<FaCocktail/>,
    title: "free cocktails",
    info: "Get Free cocktails whenever you spend a night with us "
   },
   {  icon:<FaCocktail/>,
    title: "free cocktails",
    info: "Get Free cocktails whenever you spend a night with us "
   },
   {  icon:<FaCocktail/>,
    title: "free cocktails",
    info: "Get Free cocktails whenever you spend a night with us "
   }
  
]
  }
   
  render(){
  return (
    <section className="services">
      <Title title="Services" /> 
      <div className="services-center">
        {/* Map the array */}
        {this.state.services.map((item,index)=>{
          return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>

          </article>
        })}
      </div>
    </section>
  )
}
}


export default Services; 