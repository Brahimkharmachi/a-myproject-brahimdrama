import React from 'react'
import "./cardthesimpss.css"


export const CardThesimps = () => {

    const cardata = [
     
      { id:1 , img:'/series/Thesimpsons/Thesipm.jpg' , alt:'simpson', url:"/thesimps1"  },
  
  
  
      
  
  
    ]
    return (
      <div>
      {cardata.map((item)=>{
        return(
      
      <div className='card-containerthesimps'  >
          <div className='image-containerthesimps'>
          <a href={item.url}> <img src={item.img} alt={item.alt}  /></a>
          </div>
      </div>
  
        );
    } )}
      </div>
  
      
    )
  }