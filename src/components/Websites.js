import React from 'react'
import CallToAction from './ui/CallToAction'

import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5em',
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    },
    paragraphContainer: {
        maxWidth: '30em'
    }
}))


export default function Websites(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    return (
       <Grid item container direction='column'>
           <Grid 
    item 
    container 
    direction='row' 
    justify={matchesMD ? 'center' : undefined}
     className={classes.rowContainer}
     style={{marginTop: matchesXS ? '1em' : "2em"}}>
        <Hidden mdDown>
            <Grid item className={classes.arrowContainer} style={{marginRight: '1em', marginLeft: '-3.5em'}}>
                <IconButton 
                style={{backgroundColor: 'transparent'}} 
                component={Link} 
                to='/mobileapps'
                onClick={()=> props.setSelectedIndex(1)}>
                    <img src={backArrow} alt='Back to Mobile apps Page' />
                </IconButton>
            </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
            <Grid item>
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Website Development
            </Typography>
            </Grid>
            <Grid itm>
                <Typography variant='body1' align={matchesMD ? 'center' : undefined} paragraph>
                    Having a website is a necessity in today's business world. 
                    They give you one central, public location to let people know who you are, 
                    what you do and why you're the best at it.
                </Typography>
                <Typography variant='body1' align={matchesMD ? 'center' : undefined} paragraph>
                   For simply having your hours posted to having a full fledged online store, making yourself accessible as possible to users online drivers, growth and enable you to react new customers.
                </Typography>
            </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid item className={classes.arrowContainer}>
            <IconButton style={{backgroundColor: 'transparent'}} component={Link} to='/services' onClick={()=> props.setSelectedIndex(0)}>
                <img src={forwardArrow} alt='Forward to Services Page' />
            </IconButton>
        </Grid>
        </Hidden>
    </Grid>
    <Grid 
    item 
    container 
    direction={matchesSM ? 'column' : 'row'} 
    alignItems='center' 
    className={classes.rowContainer}
    style={{marginTop:'15em'}}>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4' gutterBottom align={matchesSM ? 'center' : undefined}>
                        Analytics
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={analytics} alt='graph with magnifying class revealing 1s and 0s' style={{marginLeft: '-2.57em'}} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
            <Typography variant='body1' align={matchesSM ? 'center' : undefined} >
                Knowledge is power, and data is 21st Century Gold. Analyzing this data can reveal hidden patterns and trends in your business,
                empowering you to make smarter decisions with measurable effects
            </Typography>
        </Grid>
    </Grid>
    <Grid 
    item 
    container 
    direction={matchesSM ? 'column' : 'row'} 
    alignItems='center' 
    className={classes.rowContainer} 
    justify='flex-end'
    style={{marginTop:'15em', marginBottom: '15em'}}>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4' gutterBottom align='center' align={matchesSM ? 'center' : undefined}>
                        E-Commerce
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={ecommerce} alt='World outline made of dollar signs'  />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 : '1em'}} className={classes.paragraphContainer}>
            <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                It's no secrat that people like to shop online
            </Typography>
            <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                in 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
            </Typography>
        </Grid>
    </Grid>
    <Grid 
    item 
    container 
    direction={matchesSM ? 'column' : 'row'}  
    alignItems='center' 
    className={classes.rowContainer}>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4' gutterBottom align={matchesSM ? 'center' : undefined}>
                        Outreach
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={outreach} alt='Megaphone' />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 : '1em'}} className={classes.paragraphContainer}>
            <Typography variant='body1' align={matchesSM ? 'center' : undefined} >
                Draw people in with a dazzling website. 
                Showing off your products online is a great way to help customers decide what's right for them before visiting in person. 
            </Typography>
        </Grid>
    </Grid>
    <Grid 
    item 
    container 
    direction={matchesSM ? 'column' : 'row'}  
    alignItems='center' 
    className={classes.rowContainer} 
    justify='flex-end'
    style={{marginTop:'15em', marginBottom: '15em'}}>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h4' gutterBottom align='center' align={matchesSM ? 'center' : undefined}>
                        Search Engine <br />Optimization
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={seo} alt="website standing on winner's podium"  />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 : '1em'}} className={classes.paragraphContainer}>
            <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined} >
                How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                If you're like us, probably never.
            </Typography>
            <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                Customers don't go there either, so we make sure your website is designed to end up on top.
            </Typography>
        </Grid>
    </Grid>
    <Grid item>
        <CallToAction setValue={props.setValue} />

    </Grid>
           
       </Grid>
    )
}
