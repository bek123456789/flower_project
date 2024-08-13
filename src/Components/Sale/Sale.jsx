import React from 'react'
import "./Sale.scss"
const Sale = () => {
    return (
        <div className="sale">
            <div className="container">
                <div className="sale__wrapper">

                    <div className="sale__buket">
                        <p className='sale__pfirst'>Популярные букеты</p>
                        <p className='sale__firstp'>Букет «Нежность»</p>
                        <p className='sale__secondp'>Элегантный букет, который станет отличным подарком на день рождения или юбилей.</p>
                        <p className='sale__thirdp'>30 x 40 см</p>
                        <p className='sale__fourthp'>3600 рубю</p>
                        <button className='sale__btn'>Заказать</button>
                    </div>
                    <div className="sale__img">
                        <img src="./public/assets/flowerbuket.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale