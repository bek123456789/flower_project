import React from 'react'
import './Bouquet.scss'

const Bouquet = () => {
    return (
        <div className="bouquet">
            <div className="container">
                <div className="bouquet__wrapper">
                    <div className="bouquet__firstcard">
                        <p className='bouquet__firstp'>Свадебные букеты</p>
                        <p className='bouquet__secondp'>Букеты для невест</p>
                    </div>
                    <div className="bouquet__secondcard">
                        <p className='bouquet__firstp'>Букеты с пионами</p>
                        <p className='bouquet__secondp'>Букеты с сезонными пионами</p>
                    </div>
                    <div className="bouquet__thirdcard">
                        <p className='bouquet__firstp'>Выбрать букет</p>
                        <p className='bouquet__secondp'>Букеты в ассортименте</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bouquet