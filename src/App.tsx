import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './sidebar/Sidebar';
import { CarouselImages } from './carousel/CarouselImages';
import './navbar.css'
import iconMenu from './icon-menu.png';
import About from './about/About';
import Skills from './skills/Skills';
function App() {
    return (
        <Router>
            <div className="App">
                <div className="side">
                    <nav className="navbar side navbar-expand-lg navbar-light p-0" >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{ zIndex: '1' }}>
                            <img className="navbar-toggler-icon" src={iconMenu} alt="iconMenu"></img>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Sidebar />
                        </div>
                    </nav>
                </div>
                <div className="main">
                    <div>

                        <CarouselImages />
                    </div>
                    <About />
                    <Skills />
                </div>
            </div>
        </Router>
    );
}

export default App;
