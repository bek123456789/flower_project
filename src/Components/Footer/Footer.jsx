import React from 'react'
import './Footer.scss'
import { links } from './components'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer  ">
                    <div className="footer__links">
                        <img src="./public/assets/botanic1.png" alt="" />
                        {
                            links.map((v) => (
                                <Link to={v.path} key={v.id}>
                                    <p className='footer__p'>{v.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer