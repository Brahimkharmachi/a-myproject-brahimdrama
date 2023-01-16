import React from 'react'
import "./homess.css"
import UncontrolledExample from './caroussel'
import Responsive from './SliderSeries/sliderserie'
import ResponsiveB from './SliderMovies/slidemovie'

export const Homepage = () => {
  return (
    <div>
      <div>
      <UncontrolledExample />
      </div>
      <div>
        <Responsive />
      </div>
      <div>
        <ResponsiveB />
      </div>

     

    </div>

  )
}
