import './ImageGenerator.css'
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import Button from '@mui/material/Button';


function ImageGenerator() {
    return (
        <div >
            <Container>
            <div className='block'>
                <h1 className="title">Frienducation Events</h1>
                <div className="subheading">Welcome to the events page of Frienducation! Here, you'll find a wide range of exciting and educational events that we have conducted, including workshops, teaching sessions, and hackathons. We are passionate about empowering individuals with coding skills and fostering a vibrant learning community.</div>
            </div>
            <Container className="imageGenerator">
                <Grid container spacing={2} mt={2} ml={3} >
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>1. Collaborative Environment</div>
                        <div className="imageStack">
                            <div className='img1'>
                                <img src={img1} className="img"></img>
                            </div>
                            <div className='img1 img2'>
                                <img src={img2} className="img"></img>
                            </div>
                            <div className='img2 img3'>
                                <img src={img3} className="img"></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>2. Mentorship and support</div>
                        <div className="buttons">
                        <button class="button">Relevance</button>
                        <button class="button">Engaging and Interactive</button>
                        <button class="button">Expert Speakers and Instructors</button>
                        <button class="button">Networking Opportunities</button>
                        <button class="button">Post-Event Support and Resources</button>
                        <div className='or'> &#8212; <i>Also</i> &#8212;</div>
                        </div>
                        <p className="desc">"The coding hackathon was an unforgettable experience that pushed my limits, fostered teamwork, and ignited a passion for coding like never before. It was an intense and exhilarating journey of learning, innovation, and making lasting connections." - Student name</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>3. Expanding Community</div>
                        <div className="borderParagraph">Looking for an ever expanding community of coders? Frienducation is the right place. With our regular seminars and hackathons we aim to unite coders from all across India and help them excel.</div>
                    </Grid>
                </Grid>
            </Container>
            </Container>
        </div>
    )
}

export default ImageGenerator
