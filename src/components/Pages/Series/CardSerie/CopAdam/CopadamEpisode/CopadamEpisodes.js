import React from 'react'
import ReactPlayer from 'react-player'
import { Cardcopadam } from '../Cardcopadam/cardcopadam';
import "./copadamepisode.css"



export const CopadamEpisodes = () => {


  return (
    <div className='ena'>
    <div className='videocop'>
        <ReactPlayer url='https://youtu.be/5fJXATpIiUQ' controls playing muted width="1080px" height="720px" onEnded
        />
    </div>
     
    <div className='cardepisode'>
    <h3 className='h3episodes'>Episodes</h3>
      <Cardcopadam />
    </div>
    
    </div>
  )
};
