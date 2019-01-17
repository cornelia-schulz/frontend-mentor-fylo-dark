import React, {useState} from 'react'
import intro from '../images/illustration-intro.png'

function Intro() {
    return (
        <section className='intro'>
            <img src={intro} alt='illustration of our services' />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</p>
            <button><span>Get Started</span></button>
        </section>
    )
}

export default Intro