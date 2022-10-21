import React, { Component } from 'react'
import classes from './About.module.css';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <h3 className={classes.descriptor}>Full Stack Developer <br/> UX/UI Designer <br/> Founder of Vendetti Studios a Creative Design Agency</h3>
                    <div className={classes.About}>
                        <p>My name is <b>Daniel Holloway</b>! I am passionate about <b>creative design, development, and innovation</b>. I express this currently via creating impactful <b>mobile friendly websites and applications</b>. I began learning graphic design and front end web design and development 10 years ago, and improved my foundation within UC Berkeley.
                        <br/>
                        <br/>
                        The learning never stops! Every day I put in time to expand & further my knowledge in modern development to help achieve client & employer satisfaction.
                        I am a very fast learner, put me onto a task and i'll master it! <b>Below</b> I have listed many of my skills, Check them out!
                        </p>
                    </div>
            </div>
        )
    }
}

export default About;