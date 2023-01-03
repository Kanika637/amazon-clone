import React from 'react'
import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';

function CarouselBlock() {
    return (
        <div className="carousel">
            <Carousel slide={false} variant={"dark"} indicators={false} nextLabel={''} prevLabel={''} prevIcon={<span aria-hidden='true' className='carousel-control-prev-icon'/> } nextIcon={<span aria-hidden='true' className='carousel-control-next-icon'/>} interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselBlock