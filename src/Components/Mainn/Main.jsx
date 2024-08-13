import React from 'react'
import "./Main.scss"
const MainComp = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__flower">
                        <div className="main__desc">
                            <p className='main__firstp'>Авторские букеты в Петербурге</p>
                            <p className='main__secondp' >Оригинальные свежие букеты с доставкой по всему городу</p>
                            <button className='main__button'>Смотреть каталог</button>
                        </div>
                        <div className="main__flow">
                            <img src="./public/assets/firstimg.png" alt="" />
                            <img src="./public/assets/second.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComp