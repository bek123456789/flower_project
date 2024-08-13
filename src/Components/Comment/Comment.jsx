import React from 'react'
import './Comment.scss'

const Comment = () => {
    return (
        <div className="comment">
            <div className="container">
                <div className="comment__wrapper">
                    
<p className='comment__otzivp'>Отзывы</p>
                    <div className="comment__cards">
                        <div className="comment__firstcard">
                            <p className='comment__firstp'>Всё очень понравилось! Быстрое оформление заказа, выбор удобного времени доставки. Всем большое спасибо!</p>
                            <p className='comment__secondp'>Марина</p>
                        </div>
                        <div className="comment__secondcard">
                            <p className='comment__firstp'>Внимательные флористы, вежливые. Магазин находится прям рядом с метро. Букет очень понравился, буду ещё заказывать!</p>
                            <p className='comment__secondp'>Татьяна</p>
                        </div>
                        <div className="comment__thirdcard">
                            <p className='comment__firstp'>Выбор букетов на любой вкус и цену. Бывают хорошие скидки,а флористы всегда помогут и точно соберут красивый букет!</p>
                            <p className='comment__secondp'>Ольга</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment