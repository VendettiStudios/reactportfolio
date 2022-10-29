import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import selfie from './selfie.png'

class Sidebar extends Component {
    public render(): React.ReactNode {

        return (
            <div className="sidebar">
                <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # dev_life </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # welcome </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hireme </div>
                <h1><Link smooth to="/#start" className="h1_links">Daniel Holloway</Link></h1>

                <img src={selfie} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> Daniel@VendettiStudios.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#project" className="links">Projects</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#skills" className="links" >Skills</Link></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/vendettistudios" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/hollowaydaniel/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:Daniel@VendettiStudios.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>

                        <li className="sidebar-nav-icons"> <a href="Resume_wd_.pdf" rel="opener noreferrer" target="_blank"><i className="fa-solid fa-file-pdf"></i></a></li>
                </ul>
            </div>

            </div >
        )
    }
}

export { Sidebar }