import React, {useState} from 'react'
import Logo from '../images/logo.svg'

function Header() {
    return (
        <header>
            {/* <img src={logo} /> */}
            <Logo />
            <nav>
                <ul className='menu'>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Sign In</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header