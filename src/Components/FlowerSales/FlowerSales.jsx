import React from 'react'
import './FlowerSales.scss'

const FlowerSales = () => {
    return (
        <div className="flowerSale">
            <div className="container">
                <div className="flowerSale__wrapper">
                    <div className="flowerSale__desc">
                        <p className='flowerSale__firstp'>Скидка 10% на первый заказ</p>
                        <p className='flowerSale__secondp'>Если заказываете у нас букет впервые — при оформлении заказа введите промокод «Botanika2021» и получите скидку 10%.</p>
                    </div>
                    <div className="flowerSale__img">
                        <img src="./public/assets/f.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerSales