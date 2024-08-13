import React from 'react'
import { details } from './components'
import { Link } from 'react-router-dom'
import './Detail.scss'


const Detail = () => {
    return (
        <div className="detail">
            <div className="container">
                <div className="detail__wrapper">
                    <p className='detail__firstp'>4 шага к идеальному букету</p>
                    <div className="detail__cards">

                        {details.map((v) => (
                            <Link className='detail__link' to={v.path} key={v.id}>
                                <img src={v.img} alt="" />
                                <p className='detail__psecond'>{v.name}</p>
                                <p className='detail__thirdp'>{v.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail