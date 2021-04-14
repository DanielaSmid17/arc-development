import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9'
const arcOrange = '#F2CC39'
const arcGrey = '#868686'
 
export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            pink: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: 'none',
            color: "white"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: 'white',
            fontSize: "1.25rem",
            fontWeight: 300
        },
        learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            borderRadius: 50,
            color: arcBlue,
            textTransform: "none",
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
        h3: {
            color: arcBlue,
            fontFamily: 'Pacifico',
            fontSize: "2.5rem"
        } ,
        body1: {
            color: arcGrey,
            fontSize: '1.25rem',
            fontWeight: 300
        }
    }
})