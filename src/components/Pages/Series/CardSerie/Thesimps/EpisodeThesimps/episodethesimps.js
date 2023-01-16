import React from 'react'
import "./episodethesimpss.css"
import ReactPlayer from 'react-player'
import { CardThesimps } from '../CardThesimps/cardthesimps';

export const Thesimps1 = () => {


    return (
      <div className='ena'>
      <div className='videocop'>
          <ReactPlayer url='https://youtu.be/bxJXOGLw8hs' controls playing muted width="1080px" height="720px" onEnded
          />
      </div>
       
      <div className='cardepisode'>
      <h3 className='h3episodes'>Episodes</h3>
        <CardThesimps />
      </div>
      
      </div>
    )
  };