import './DiscoverMore.css'
import React from 'react'
import { Container } from '@mui/material';
import { Grid } from '@mui/material'
import DiscoverMoreBox from '../../components/DiscoverMoreBox/DiscoverMoreBox';

function DiscoverMore() {
    return (
        <div className='DiscoverMore'>
            <Container>
                <div className="DiscoverHeading" >Discover more </div>
            <Grid container className="ContainerBoxes">
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="Home"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="About"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="Courses"/>
                </Grid>
                <Grid item xs={12} md={3} >
                    <DiscoverMoreBox content="Internships"/>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default DiscoverMore
