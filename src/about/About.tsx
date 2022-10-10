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
                        <p> Hello! Welcome to my Portfolio! My name is <b>Daniel Holloway</b>, I am currently just beginning my journey as a Software Developer/Engineer. I can build mobile friendly websites and applications, front and back end. I learned my foundation of coding at the University of Berkeley Ext., which gave me a GREAT foundation.
                        <br/>
                        <br/>
                        Though the learning never stops! Every day I put in time to expand & further my knowledge in modern development to help achieve client & employer satisfaction.
                        </p>
                    </div>
            </div>
        )
    }
}

export default About;