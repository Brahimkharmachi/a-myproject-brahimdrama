import React, { Component } from "react";
import Slider from "react-slick";
import"./slidermoviee.css"



export default class ResponsiveB extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h3>Best  Movies</h3>
        <Slider {...settings}>
          <div className="slid">
        <a href="/fastandfs"><img src="./movies/Fastandfs/fastandfc.jpg" alt="fast"  /> </a>
          </div>

          <div className="slid">
          <a href="/thehangover"><img src="./movies/Thehangover/thehangoverc.jpg" alt="hangover" /> </a>
          </div>

          <div className="slid">
          <a href="/thespy"><img src="./movies/Thespy/thespyc.jpg" alt="spy" /> </a>
          </div>

          <div className="slid">
          <a href="/badblood"><img src="./movies/Badblood/baddbloodc.jpg" alt="badblood" /> </a>
          </div>

          <div className="slid">
          <a href="/thesimpsmovie"><img src="./movies/Thesimpsmovie/thesimpsmc.jpg" alt="thesimps" /> </a>
          </div>
          
        </Slider>
      </div>
    );
  }
}
