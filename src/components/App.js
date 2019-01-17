import React, { Component } from 'react'
import '../styles/App.scss'
import Header from './Header'
import Intro from './Intro'
import Benefits from './Benefits'
import Summary from './Summary'
import Testimonials from './Testimonials'
import Subscription from './Subscription'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Intro />
                <Benefits />
                <Summary />
                <Testimonials />
                <Subscription />
                <Footer />
            </div>
        )
    }
}

export default App