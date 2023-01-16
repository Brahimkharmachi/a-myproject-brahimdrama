import Carousel from 'react-bootstrap/Carousel';
import "./carousssel.css"

function UncontrolledExample() {

 
    

  return (

   
    <Carousel className='caroussel'>
      <Carousel.Item>
      <img className="d-block w-100" src='./series/Dirilis/Ertugrul.jpg'  alt='ertugrul'/>
        <Carousel.Caption>
          <h3>Dirilis Ertugrul</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img className="d-block w-100" src='./movies/Fastandfs/fastandfuriouscards.jpg'  alt='ertugrul'/>
        <Carousel.Caption>
          <h3>Fast and Furious 9</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img className="d-block w-100" src='/series/Payithabd/Abdelhamit.jpg'  alt='abdelhamit'/>
        <Carousel.Caption>
          <h3>Payitaht Abdülhamid</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img className="d-block w-100" src='/movies/Thehangover/TheHangover.jpg'  alt='thehangover'/>
        <Carousel.Caption>
          <h3>TheHangover</h3>
        </Carousel.Caption>
      </Carousel.Item>


      


      <Carousel.Item>
      <img className="d-block w-100" src='./series/copadam/copadamcard.jpg'  alt='ertugrul'/>
        <Carousel.Caption>
          <h3>Çöp Adam</h3>
        </Carousel.Caption>
      </Carousel.Item>


      </Carousel>
 
  );
}

export default UncontrolledExample;