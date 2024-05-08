import React from 'react'
import style from '../Companent/Header.module.css'
import logo from '../Images/logo (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';







const Header = () => {
    return (
        <header>


            <div className={style.container}>
                <div className={style.logos}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.inp}>
                    <select name="" id="">
                        <option value="option1">All </option>
                    </select>
                    <input type="text" />
                </div>
                <div className={style.icons}>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
            <div className={style.containerSecondMain}>
                <div className={style.containerSecond}>
                    <nav>
                        <ul>
                            <li><a href="">Demos</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Elements</a></li>
                        </ul>
                    </nav>
                    <div className={style.picer}>
                        <p><FontAwesomeIcon icon={faEnvelope} />CONTACT</p>
                        <p><FontAwesomeIcon icon={faClock} /> 08:00 - 17:00</p>
                        <p><FontAwesomeIcon icon={faPhone} />+47 900 99 000</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
