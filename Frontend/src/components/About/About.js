import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { makeStyles } from '@material-ui/core/styles';
import { aboutData } from '../../data/aboutData'
import { headerData } from '../../data/headerData'
import Fade from 'react-reveal/Fade';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'



function About() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>About {headerData.name}</title>
            </Helmet>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <Fade bottom>
                    <div className={`education-card ${classes.educationCard}`} >
                        <div className="education-details">
                            <h6 style={{ color: theme.primary }}>Afnan</h6>
                            <h4 style={{ color: theme.tertiary }}>Afnan</h4>
                            <h6 style={{ color: theme.tertiary80 }}>Afnan</h6>
                            <h5 style={{ color: theme.tertiary80 }}>Result: Afnan</h5>
                        </div>
                    </div>
                </Fade>
                <div className="about-img">
                    <img
                        src={aboutData.gender === "male" ? theme.aboutimg1 : theme.aboutimg2}
                        alt=""
                    />
                </div>
            </div >
        </div >

    )
}

export default About
