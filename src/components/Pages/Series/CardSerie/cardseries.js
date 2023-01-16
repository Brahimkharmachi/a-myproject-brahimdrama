import React from 'react'
import "./caerdserie.css"

export const Cardseries = () => {
   
const Data = [

  { id:1 , img:'/series/Dirilis/Dirilis.jpg' , alt:'dirilis' , url:'/dirilis'},
  { id:2 , img:'/series/Payithabd/payith.jpg' , alt:'payith' , url:'/payith' },
  { id:3 , img:'/series/copadam/copadamepisode.jpg' , alt:'copadam' , url:'/copadam' },
  { id:4 , img:'/series/Kurulus/kuruluuus.jpg' , alt:'kurulus' , url:'/kurulus'},
  { id:5 , img:'/series/Thesimpsons/thesipm.jpg' ,alt:'thesimps', url:'/thesimps'},
]
  

  return (

  <div>
    {Data.map((item)=>{
      return(
    
    <div className='card-container'  >
        <div className='image-container'>
        <a href={item.url}> <img src={item.img} alt={item.alt} /> </a>
        </div>
    </div>

      );
  } )}
    </div>
  )
}
