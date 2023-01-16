import React, { Component } from "react";
import Slider from "react-slick";
import"./sliderseriee.css"



export default class Responsive extends Component {
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
        <h3>Best  Series</h3>
        <Slider {...settings}>
          <div className="slid">
        <a href="/kurulus"><img src="./series/Kurulus/kuruluso.jpg" alt="kurulus"  /> </a>
          </div>
          <div className="slid">
          <a href="/dirilis"><img src="./series/Dirilis/dirilise.jpg" alt="dirilis" /> </a>
          </div>
          <div className="slid">
          <a href="/payith"><img src="./series/Payithabd/payitaht.jpg" alt="abd" /> </a>
          </div>
          <div className="slid">
          <a href="/copadam"><img src="./series/copadam/copadamc.jpg" alt="copadam" /> </a>
          </div>
          <div className="slid">
          <a href="/thesimps"><img src="./series/Thesimpsons/thesimpsc.jpg" alt="thesimps" /> </a>
          </div>
        
        </Slider>
      </div>
    );
  }
}
