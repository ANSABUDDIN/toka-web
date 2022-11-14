import React from 'react'
import Slider from 'react-slick'
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,

        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,

                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,

                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='slider container my-lg-5 my-3'>
                <Slider {...settings} >
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src="/assets/images/svgs/binance.svg" className='img-fluid slider-img' alt="" />
                    </div>
                    
                   

                </Slider>
            </div>
        </>
    )
}

export default Carousel