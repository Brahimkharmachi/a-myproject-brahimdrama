import React from 'react'
import "./carddirilis.css"

export const Carddirilis = () => {

  const cardata = [
   
    { id:1 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis1"  },
    { id:2 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis2"  },
    { id:3 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis3"  },
    { id:4 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis4"  },
    { id:5 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis5"  },
    { id:6 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis6"  },
    { id:7 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis7"  },
    { id:8 , img:'/series/Dirilis/episode.jpg' , alt:'dirilis', url:"/dirilis8"  },


    


  ]
  return (
    <div>
    {cardata.map((item)=>{
      return(
    
    <div className='card-containerdirilis'  >
        <div className='image-containerdirilis'>
        <a href={item.url}> <img src={item.img} alt={item.alt}  /></a>
        </div>
    </div>

      );
  } )}
    </div>

    
  )
}
