import React from 'react'
import ReactPlayer from 'react-player'
import { Moviess } from '../../movies';
import "./badbloood.css"



export const Badblood = () => {


  return (
    <div className='ena'>
    <div className='videocop'>
        <ReactPlayer url='https://youtu.be/7TcZ5x-oFqQ' controls playing muted width="1080px" height="720px" onEnded
        />
    </div>
     
    <div className='cardmovie'>
    <h3 className='h3movie'>Movies</h3>
      <Moviess />
    </div>
    
    </div>
  )
};