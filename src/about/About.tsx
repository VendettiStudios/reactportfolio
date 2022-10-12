import React, { Component } from 'react'
import classes from './About.module.css';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> Hello! Welcome to my Portfolio! My name is <b>Daniel Holloway</b>! I build mobile friendly websites and applications, front & back end. I learned much of my coding skills and recieved a great foundation at the University of Berkeley Ext.
                        <br/>
                        <br/>
                        Though the learning never stops! Every day I put in time to expand & further my knowledge in modern development to help achieve client & employer satisfaction.
                        I am a very fast learner, put me onto a task and i'll master it!
                        </p>
                    </div>
            </div>
        )
    }
}

export default About;