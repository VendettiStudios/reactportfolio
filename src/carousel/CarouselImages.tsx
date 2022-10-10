import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselImages.css';
import background4 from './background4.jpeg';
import background3 from './background3.jpeg';
import "animate.css/animate.min.css";
import blfg from './blfg.jpeg';
import offload from './offload.png';
import pokemon from './pokemon.png';

class CarouselImages extends Component {
    render() {
        return (
            <div className='carousel_container' id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className='carousel' dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className='image_container' >
                        <img className='background' src={background4} alt="myImage" />
                        <div className='h1'>
                            <h1 >I'm Daniel</h1>
                            <a href="Link" rel="opener noreferrer" target="_blank">VIEW CV   </a>
                        </div>
                    </div>
                    <div className='image_container'>
                    <img className='background' src={background3} alt="myImage2" />
                        <div className='h2'>
                            <h1> I love building</h1>
                            <h1>THINGS!!</h1>
                            <br/>
                            <h2>Keep Watching To See My Past Projects!</h2>
                            <a href="https://github.com/VendettiStudios" rel="opener noreferrer" target="_blank">VIEW PROJECTS ON GITHUB</a>
                        </div>
                    </div>
                    <div className='image_container' >
                        <img className='background' src={blfg} alt="myImage3" />
                        <div className='h3'>
                            <a href="https://lets-frickin-game.herokuapp.com/" rel="opener noreferrer" target="_blank">View Demo</a>
                        </div>
                    </div>
                    <div className='image_container' >
                        <img className='background' src={offload} alt="myImage4" />
                        <div className='h3'>
                            <a href="https://yeh-offload.herokuapp.com/signin" rel="opener noreferrer" target="_blank">View Demo</a>
                        </div>
                    </div>
                    <div className='image_container' >
                        <img className='background' src={pokemon} alt="myImage5" />
                        <div className='h3'>
                            <a href="https://dnsnguy08.github.io/Pokemon-Battle/" rel="opener noreferrer" target="_blank">View Demo</a>
                        </div>
                    </div>
                </Carousel>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export { CarouselImages }