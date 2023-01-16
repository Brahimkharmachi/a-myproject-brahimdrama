import React from 'react'
import "./cardmoviess.css"

export const Cardmovies = () => {
   
const Data = [

  { id:1 , img:'/movies/Fastandfs/fastandfurious.jpg' , alt:'fast' , url:'/fastandfs'},
  { id:2 , img:'/movies/Thehangover/thehangovers.jpg' , alt:'thehangover' , url:'/thehangover' },
  { id:3 , img:'/movies/Thespy/thespynext.jpg' , alt:'thespy' , url:'/thespy' },
  { id:4 , img:'/movies/Badblood/badblood.jpg', alt:'bad', url:'/badblood'},
  { id:5 , img:'/movies/Thesimpsmovie/thesimpsm.jpg' , alt:'thesimps' , url:'/thesimpsmovie'},
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
