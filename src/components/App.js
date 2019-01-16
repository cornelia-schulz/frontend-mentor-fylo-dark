import React, { Component } from 'react'
import '../styles/App.scss'
import Header from './Header'
import Intro from './Intro'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Intro />
            </div>
        )
    }
}

export default App