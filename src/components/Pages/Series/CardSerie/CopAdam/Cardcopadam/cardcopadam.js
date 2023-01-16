import React from 'react'
import "./cardcopadam.css"

export const Cardcopadam = () => {

  const cardata = [
   
    { id:1 , img:'/series/copadam/copadamepisode.jpg' , alt:'copadam', url:"/copadam1"  },

  ]
  return (
    <div>
    {cardata.map((item)=>{
      return(
    
    <div className='card-containercop'  >
        <div className='image-containercop'>
        <a href={item.url}> <img src={item.img} alt={item.alt} /> </a>
        </div>
    </div>

      );
  } )}
    </div>

    
  )
}
