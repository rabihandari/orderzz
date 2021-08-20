import { makeStyles } from '@material-ui/core';
import CommingSoonBG from '../../images/commingsoon-bg.png';

export default makeStyles(theme => ({
    mainContainer: {
        background: `url("${CommingSoonBG}") no-repeat fixed center`,
        backgroundSize: 'cover',
        height: '100vh'
    },
    container: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'FuturaPT',
        color: 'white',
        padding: '10px'
    },
    description: {
        color: 'rgba(255,255,255,0.63)',
        maxWidth: '600px',
        textAlign: 'center',
    },
    logo: {
        padding: '20px 0px'
    },
    smConatiner: {
        padding: '40px 0px'
    },
    smButton: {
        color: 'white'
    },
    smDivider: {
        backgroundColor: 'rgba(255,255,255,.17)',
        width: '1px',
        height: '15px',
        margin: '0px 5px'
    }
}));