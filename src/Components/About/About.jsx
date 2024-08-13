import React from 'react'
import { aboutDesc } from './components'
import { Link } from 'react-router-dom'
import './About.scss'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__descs">
                        {aboutDesc.map((v) => (

                            <Link className='about__link' to={v.path} key={v.id}>
                                <img src={v.img} alt="" />
                                <Link>
                                    <p className='about__firstp'>{v.name}</p>
                                    <p className='about__secondp'>{v.description}</p>
                                </Link>

                            </Link>

                        ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About