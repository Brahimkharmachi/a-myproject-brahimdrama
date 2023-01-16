import React from 'react'
import "./cardkkkurulus.css"


export const Cardkurulus = () => {

    const cardata = [
     
      { id:1 , img:'/series/Kurulus/kurulusep.jpg' , alt:'kuruluus', url:"/kurulus1"  },
      { id:2 , img:'/series/Kurulus/kurulusep.jpg' , alt:'kuruluus', url:"/kurulus2"  },
      { id:3 , img:'/series/Kurulus/kurulusep.jpg' , alt:'kuruluus', url:"/kurulus3"  },
      { id:4 , img:'/series/Kurulus/kurulusep.jpg',  alt:'kuruluus', url:"/kurulus4"  },
  
  
  
      
  
  
    ]
    return (
      <div>
      {cardata.map((item)=>{
        return(
      
      <div className='card-containerkurulus'  >
          <div className='image-containerkurulus'>
          <a href={item.url}> <img src={item.img} alt={item.alt}  /></a>
          </div>
      </div>
  
        );
    } )}
      </div>
  
      
    )
  }
