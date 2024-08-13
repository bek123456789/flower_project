import React from 'react'
import { firstLinks } from './components'
import { Link } from 'react-router-dom'
import { secondLinks } from './components'
import "./Header.scss"
import { Logo } from '../../../public/assets/svg'


const Header = () => {


    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__links">
                        <div className="header__link">

                            {
                                firstLinks.map((v) => (
                                    <Link className='header__firstlink' to={v.path} key={v.id}>
                                        {v.name}
                                    </Link>
                                ))
                            }

                        </div>
                        <div className='header__icon'>
                          <Logo />
                        </div>
                        <div className="header__link">

                            {
                                secondLinks.map((v) => (
                                    <Link className='header__firstlink' to={v.path} key={v.id}>
                                        {v.name}
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header