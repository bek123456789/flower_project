import React from 'react'
import Header from '../../Components/Header/Header'
import MainComp from '../../Components/Mainn/Main'
import About from '../../Components/About/About'
import Sale from '../../Components/Sale/Sale'
import Bouquet from '../../Components/Bouquet/Bouquet'
import FlowerSales from '../../Components/FlowerSales/FlowerSales'
import Detail from '../../Components/Detail/Detail'
import Comment from '../../Components/Comment/Comment'
import Location from '../../Components/Location/Location'
import Footer from '../../Components/Footer/Footer'

const Main = () => {
    return (
        <>
            <Header />
            <MainComp />
            <About />
            <Sale />
            <Bouquet />
            <FlowerSales />
            <Detail />
            <Comment />
            <Location />
            <Footer />
        </>
    )
}

export default Main