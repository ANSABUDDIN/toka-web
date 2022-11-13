import React from 'react'
import Slider from 'react-slick'
const SliderSec = () => {
    const settings = {
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 10,
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <div className='p-3 '>
                <div className='slider bg-dash container p-4 rounded-3'>
                    <Slider {...settings} >
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/btc.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Btc</p>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/eth.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Eth</p>

                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                            <img src="/assets/images/c.png" className='img-fluid slider-img-2' alt="" />
                            <p className='fs-6 fw-bold text-light'>Coin Base</p>

                        </div>


                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SliderSec