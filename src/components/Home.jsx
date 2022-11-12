import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Footer from './elements/Footer'
import Header from './elements/Header'
import Banner from './sections/banner'
import BaseConcept from './sections/BaseConcept'
import Businessmodel from './sections/Businessmodel'
import Carousel from './sections/Carousel'
import { useTranslation  } from "react-i18next";
import CardSec from './sections/CardSec'
import EarnmoreSec from './sections/EarnmoreSec'
import Platform from './sections/Platform'
import AdvantageSec from './sections/AdvantageSec'
import Faqs from './sections/Faqs'
import Pakages from './sections/Pakages'

const Home = () => {
    const t = useTranslation();
    

    return (

        <>
            <Header />
            <Banner />
            <Carousel />
            <BaseConcept />
            <AdvantageSec />
            <Platform />
            <Businessmodel />
            <Pakages />
            <CardSec />
            <EarnmoreSec />
            <Faqs />
            <Footer />
        </>
    )
}

export default Home