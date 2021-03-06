import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import ButtonArrow from '../components/ui/ButtonArrow'

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    },
    background: {
       backgroundImage: `url(${background})`,
       backgroundPosition: 'center',
       backgroundSize: "cover",
       backgroundRepeat: 'no-repeat',
       height: "60em",
       paddingBottom: '10em',
       [theme.breakpoints.down('md')]: {
           backgroundImage: `url(${mobileBackground})`
       }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.pink,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginRight: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.pink,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
            widtth: 225
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')

    const [phone, setPhone] = useState('')
    const [phoneHelper, setPhoneHelper] = useState('')
    
    const [message, setMessage] = useState('')

    const [open, setOpen] = useState(false)

    const onChange = e => {
        let valid;
        switch(e.target.id) {
            case "email": 
                setEmail(e.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
                if (!valid) {
                    setEmailHelper('Invalid email')
                } else {
                    setEmailHelper('')
                }
                break;
            case "phone": 
                setPhone(e.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)
            if (!valid) {
                setPhoneHelper('Invalid phone number')
            } else {
                setPhoneHelper('')
            }
            break;
            default:
            break;
            

        }
    }

    return (
       <Grid container direction='row'>
            <Grid 
            item 
            container 
            direction='column' 
            justify='center' 
            alignItems='center' 
            style={{marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? '1em' : matchesMD ? "5em" : 0}}
            lg={4} 
            xl={3}>
           <Grid item direction='column' alignItems="center">
                <Grid item>
                    <Typography variant='h2' style={{lineHeight: 1}} align={matchesMD ? 'center' : undefined}>
                        Contact us
                    </Typography>
                    <Typography variant='body1' style={{color: theme.palette.common.blue}} align={matchesMD ? 'center' : undefined}>
                        We're waiting.
                    </Typography>
                </Grid>
                <Grid item container style={{marginTop: '2em'}}>
                    <Grid item>
                        <img src={phoneIcon} alt='phone' style={{marginRight: '0.5em'}} />
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1rem'}}><a href='tel: 972542775279' style={{textDecoration: "none", color: 'inherit'}}> (555) 555-5555 </a></Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBottom: '2em'}}>
                    <Grid item>
                        <img src={emailIcon} alt='envelop' style={{marginRight: '0.5em', verticalAlign: 'bottom'}} />
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1rem'}}> <a href='mailto:dani.smid@gmail.com' style={{textDecoration: "none", color: 'inherit'}}>dani.smid@gmail.com</a></Typography>
                    </Grid>
                </Grid>
                <Grid item container direction='column' style={{maxWidth: '20em'}}>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                        label='Name' 
                        id='name' 
                        fullWidth 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                        label='Email' 
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        id='email' 
                        fullWidth 
                        value={email} 
                        onChange={onChange}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}> 
                        <TextField 
                        label='Phone' 
                        id='phone'  
                        error={phoneHelper.length !== 0}
                        helperText={phoneHelper}
                        fullWidth 
                        value={phone} 
                        onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: '20em'}}>
                    <TextField 
                    InputProps={{disableUnderline: true}}
                    className={classes.message}
                    value={message} 
                    id='message' 
                    onChange={(e) => setMessage(e.target.value)} 
                    multiline 
                    fullWidth
                    rows={10}/>
                </Grid>
                <Grid item container justify='center' style={{marginTop: '2em'}}>
                    <Button 
                    // disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0 } 
                    variant='contained' 
                    className={classes.sendButton}
                    onClick={() => setOpen(true)} >
                        Send message
                        <img src={airplane} alt='paper airplane' style={{marginLeft: '1em'}}/>
                    </Button>
                </Grid>
                </Grid>
            </Grid>
            <Dialog 
            open={open} 
            onClose={() => setOpen(false)} 
            PaperProps={{style: 
            {paddingTop: matchesXS ? '1em' : '5em', 
            paddingBottom: matchesXS ? '1em' : '5em',
             paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em', 
             paddingRight: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em'}}}
             style={{zIndex: 1302}}
             fullScreen={matchesXS}>
                <DialogContent>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography align='center' variant='h4' gutterBottom>
                                Confirm message
                            </Typography>
                        </Grid>
                       
                        <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                        label='Name' 
                        id='name' 
                        fullWidth 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField 
                        label='Email' 
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        id='email' 
                        fullWidth 
                        value={email} 
                        onChange={onChange}/>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}> 
                        <TextField 
                        label='Phone' 
                        id='phone'  
                        error={phoneHelper.length !== 0}
                        helperText={phoneHelper}
                        fullWidth 
                        value={phone} 
                        onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
                    <TextField 
                    InputProps={{disableUnderline: true}}
                    className={classes.message}
                    value={message} 
                    id='message' 
                    onChange={(e) => setMessage(e.target.value)} 
                    multiline 
                    fullWidth
                    rows={10}/>
                        
                    </Grid>
                    <Grid item container direction={matchesSM ? 'column' : 'row'}style={{marginTop: '2em'}} alignItems='center'>
                        <Grid item>
                            <Button color='primary' onClick={()=> setOpen(false)} style={{fontWeight: 300}}> Cancel </Button>
                        </Grid>
                        <Grid item>
                        <Button 
                    disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0 } 
                    variant='contained' 
                    className={classes.sendButton}
                    onClick={() => setOpen(true)} >
                        Send message
                        <img src={airplane} alt='paper airplane' style={{marginLeft: '1em'}}/>
                    </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
               <Grid 
               item 
               container 
               direction={matchesMD ? 'column' : 'row'} 
               className={classes.background} 
               lg={8} 
               xl={9} 
               alignItems='center'
               justify={matchesMD ? 'center' : undefined}> 
               <Grid item style={{marginLeft: matchesMD ? 0 : '3em', textAlign: matchesMD ? "center" : "inherit"}}>
            <Grid container direction='column'>
              <Grid item>
                  <Typography variant='h2' align={matchesMD ? 'column' : 'row'}> Simple Software. <br /> Revolutionary Results.</Typography>
                  <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>Take advantage of the 21st Century.</Typography>
                  <Grid container justify={matchesMD ? 'center' : undefined} item>
                        <Button component={Link} to='/revolution' className={classes.learnButton} variant='outlined' onClick={() => props.setValue(2)}>
                                 <span style={{margin: 5}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                        </Grid>
                     </Grid>
                 </Grid>
        </Grid>
            <Grid item>
          <Button component={Link} to='/estimate' variant='contained' className={classes.estimateButton} onClick={() => props.setValue(5)}>Free Estimate</Button>
    </Grid>   
           </Grid>
       </Grid>
    )
}
