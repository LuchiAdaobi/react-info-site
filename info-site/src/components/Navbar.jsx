import React from 'react'
import ReactLogo from '/src/assets/reactjs-icon.png'

export default function Navbar() {
    return(
        <div>
            <header>
                <nav>
                    <img src={ReactLogo} alt="react icon" className='logo' />
                    <h2 className='logo-heading'>ReactFacts</h2>
                </nav>
                <h4 className='logo-text'>React Course - Project 1</h4>
            </header>
        </div>
    )
}