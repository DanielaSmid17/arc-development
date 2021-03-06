import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from '../components/ui/ButtonArrow'

import CustomSoftwareIcon from '../assets/Custom Software Icon.svg'
import MobileAppsIcon from '../assets/mobileIcon.svg'
import WebsiteIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
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
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    }

}))

export default function Services(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
      <Grid container direction="column">
          <Grid item style={{marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em'}}>
              <Typography variant="h2" gutterBottom align={matchesSM ? 'center' : 'undefined'}>
                  Services
              </Typography>
          </Grid>
              <Grid item>  {/*-----iOS/Android Block-----*/}
                <Grid container 
                justify={matchesSM ? "center" : "flex-end"} 
                direction='row' 
                className={classes.serviceContainer}
                style={{marginTop: matchesSM ? '1em' : '5em'}}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : '35em' }}>
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
                    <img className={classes.icon} alt='mobile icon' src={MobileAppsIcon}  width='250em'/>
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
            
                <Grid item>  {/*-----Website Block-----*/}
                <Grid container justify={matchesSM ? "center" : "flex-end" } direction='row' className={classes.serviceContainer} style={{marginBottom: '10em'}}>
                <Grid item style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : '35em'}}>
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
                    <img className={classes.icon} alt='website icon' src={WebsiteIcon} width='250em' />
                    </Grid>
                </Grid>
                </Grid> 
      </Grid>
    )
}
