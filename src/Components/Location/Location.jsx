import React from 'react'
import "./Location.scss"

const Location = () => {
    return (
        <div className="location">
            <iframe className='location__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.9017721340597!2d69.28375677557695!3d41.36695869726293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3538199cd9b%3A0x13422e77d307b8e3!2sCAMBRIDGE%20Learning%20Center%20-%20Yunusobod!5e1!3m2!1sru!2s!4v1723468400631!5m2!1sru!2s" style={{ width: "100%", height: "644px", }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="location__contact">
                <p className='location__firstp'>Мы ждем вас</p>
                <p className='location__secondp'>Приходите к нам:</p>
                <p className='location__secondp'>Санкт-Петербург, ул. Большая Конюшенная, 19</p>
                <p className='location__secondp'>Режим работы:</p>
                <p className='location__secondp'>Пн-Вск, с 9-00 до 20-00</p>
                <p className='location__secondp'>Позвоните нам:</p>
                <p className='location__secondp'>+ 7 (812) 983-47-19</p>
                <p className='location__secondp'>Напишите нам:</p>
                <p className='location__secondp'>info@botanika.ru</p>
            </div>
        </div>
    )
}

export default Location