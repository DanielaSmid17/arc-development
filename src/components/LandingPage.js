import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import CallToAction from './ui/CallToAction'
import ButtonArrow from '../components/ui/ButtonArrow'
import {Link} from 'react-router-dom'

import CustomSoftwareIcon from '../assets/Custom Software Icon.svg'
import MobileAppsIcon from '../assets/mobileIcon.svg'
import WebsiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import InfoBackground from '../assets/infoBackground.svg'

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em"
           }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.pink,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
   buttonContainer: {
       marginTop: '1em'
   },
   learnButtonHero: {
       ...theme.typography.learnButton,
       fontSize: '0.9rem',
       height: 45,
       width: 145
   },
   learnButton: {
       ...theme.typography.learnButton,
       fontSize: '0.7rem',
       height: 35,
       padding: 5,
       [theme.breakpoints.down('sm')]: {
           marginBottom: "2em"
       }
   },
   mainContainer: {
       marginTop: "5em",
       [theme.breakpoints.down('md')]: {
        marginTop: "3em"
       },
       [theme.breakpoints.down('xs')]: {
        marginTop: "2em"
       }
   },
   heroTextContainer: {
       minWidth: "21.5em",
       marginLeft: "1em",
       [theme.breakpoints.down('xs')]: {
        marginLeft: 0
       }
   },
   specialText: {
       fontFamily: 'Pacifico',
       color: theme.palette.common.pink
   },
   subtitle: {
       marginBottom: "1em"
   },
   icon: {
       marginLeft: "2em",
       [theme.breakpoints.down('xs')]: {
        marginLeft: 0
       }
   },
   serviceContainer: {
       marginTop: '18em',
       [theme.breakpoints.down('sm')]: {
           padding: 25
       }
   },
   revolutionBackground: {
       backgroundImage: `url(${revolutionBackground})`,
       backgroundPosition: 'center',
       backgroundSize: "cover",
       backgroundRepeat: 'no-repeat',
       height: "100%",
       width: "100%"
   },
   revolutionCard: {
       position: 'absolute',
       boxShadow: theme.shadows[10],
       borderRadius: 15,
       padding: '10em',
       width: '50%',
       height: '40%',
       [theme.breakpoints.down('sm')]: {
           paddingTop: '8em',
           paddingBottom: '8em',
           paddingRight: 0,
           paddingLeft: 0,
           borderRadius: 0,
           width: '100%'
        }
   }, infoBackground: {
       backgroundImage: `url(${InfoBackground})`,
       backgroundPosition: 'center',
       backgroundSize: "cover",
       backgroundRepeat: 'no-repeat',
       height: "100%",
       width: "100%"

   }
    
}))
export default function LandingPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return (
        <Grid container className={classes.mainContainer} direction="column">
            <Grid item> {/*-----Hero Block-----*/}
                <Grid container justify='flex-end' alignItems='center' direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align='center'>Bringing West Coast Technology <br />to the Midwest</Typography>
                        <Grid container className={classes.buttonContainer} justify='center'>
                            <Grid item>
                                <Button component={Link} to='/estimate' className={classes.estimateButton} variant='contained' onClick={() => props.setValue(5)}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to='/revolution' className={classes.learnButtonHero} variant='outlined' onClick={() => props.setValue(2)}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
                </Grid> 
                <Grid item>  {/*-----Custom sofware-----*/}
                <Grid container justify={matchesSM ? "center" : undefined} direction='row' className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from investigation to{" "} 
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to='/customsoftware' variant='outlined' className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item> 
                    <img className={classes.icon} alt='custom software icon' src={CustomSoftwareIcon} />
                    </Grid>
                </Grid>
                </Grid> 
                <Grid item>  {/*-----iOS/Android Block-----*/}
                <Grid container justify={matchesSM ? "center" : "flex-end"} direction='row' className={classes.serviceContainer}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant='h4'>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Extend functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />} 
                            with either mobile platform.
                        </Typography>
                        <Button component={Link} to='/mobileapps' variant='outlined' className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}> 
                    <img className={classes.icon} alt='mobile icon' src={MobileAppsIcon} />
                    </Grid>
                </Grid>
                </Grid> 
                <Grid item>  {/*-----Website Block-----*/}
                <Grid container justify={matchesSM ? "center" : undefined } direction='row' className={classes.serviceContainer}>
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Reach more. Discover more. Sell more.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button component={Link} to='/websites' variant='outlined' className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}> 
                    <img className={classes.icon} alt='website icon' src={WebsiteIcon} />
                    </Grid>
                </Grid>
                </Grid> 
            <Grid item> {/*-----The revolution Block----*/}
                <Grid container style={{height: "100em", marginTop: '12em'}} alignItems='center' justify='center'>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction='column' style={{textAlign: 'center'}}>
                                <Grid item>
                                    <Typography variant='h3' gutterBottom>
                                        The Revolution
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Typography variant='subtitle1'>
                                        Visionaly insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button component={Link} to='/revolution' className={classes.learnButtonHero} variant='outlined' onClick={() => props.setValue(2)}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}></div>
                </Grid>
            </Grid>
            <Grid item> {/*-----Information block-----*/}
            <Grid container direction="row" alignItems='center' style={{height: '80em'}} className={classes.infoBackground}>
                <Grid item container style={{textAlign: matchesXS ? "center" : "inherit"}} direction={matchesXS ? 'column' : 'row'}>
                <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}}>
                    <Grid container style={{marginBottom: matchesXS ? '10em' : 0}} direction='column'>
                        <Typography variant='h2' style={{color: 'white'}}>
                            About us
                        </Typography>
                        <Typography variant='subtitle2'>
                            Let's get personal
                        </Typography>
                        <Grid item>
                        <Button component={Link} to='/about' className={classes.learnButtonHero} variant='outlined' style={{color: 'white', borderColor: 'white'}} onClick={() => props.setValue(3)}>
                                 <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill='white' />
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? "center" : "right"}}>
                    <Grid container direction='column'>
                        <Typography variant='h2' style={{color: 'white'}}>
                            Contact us
                        </Typography>
                        <Typography variant='subtitle2'>
                            Say hello! <span role='img' aria-label='waving hand'>👋</span>
                        </Typography>
                        <Grid item>
                        <Button component={Link} to='/contact' className={classes.learnButtonHero} variant='outlined' style={{color: 'white', borderColor: 'white'}} onClick={() => props.setValue(4)}>
                                 <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill='white' />
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
                <Grid item> {/*-----Call to action Block-----*/}
                <CallToAction setValue={props.setValue} />
                </Grid>
        </Grid>
    );
}
