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

    console.log(aboutData);

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
                        <div className="grid grid-cols-2">
                            <div className='mx-8'>
                                <h4 style={{ color: theme.tertiary }}>Name: </h4>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.name}</h2>
                                <h4 style={{ color: theme.tertiary }}>Birthday: </h4>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.dob}</h2>
                                <h4 style={{ color: theme.tertiary }}>Qualification: </h4>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.qualification}</h2>
                                <h4 style={{ color: theme.tertiary }}>Position: </h4>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.position}</h2>
                                <h4 style={{ color: theme.tertiary }}>Company: </h4>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.company}</h2>
                            </div>
                            <div className='mx-8 self-center grid grid-cols-2'>
                                <div>
                                <h4 style={{ color: theme.tertiary }}>Experience (year): </h4>
                                <h4 style={{ color: theme.tertiary }}>Projects Done: </h4>
                                <h4 style={{ color: theme.tertiary }}>Awards Won : </h4>
                                </div>
                                <div>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.experience}+</h2>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.project}+</h2>
                                <h2 style={{ color: theme.primary, paddingLeft: 40 }}>{aboutData.award}+</h2>
                                </div>
                            </div>

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
