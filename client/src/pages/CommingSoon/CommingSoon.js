import React from 'react';
import { Container, Typography, Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './styles';
import Logo from '../../images/logo.png';

const CommingSoon = () => {
    const classes = useStyles();

    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container direction="column" alignItems="center">
                    <img src={Logo} alt="Orderzz" height="100" width="100" className={classes.logo}/>
                    <Typography variant="h2" className={classes.title}>Comming Soon</Typography>
                    <Typography className={classes.description} variant="body2">We leverage the best restaurant management solution to grow your venture, scale your impact, and propel your mission forward. Stay tuned!</Typography>
                    <Grid container justifyContent="center" alignItems="center" className={classes.smConatiner}>
                        <Grid item>
                            <IconButton aria-label="Facebook" className={classes.smButton} component="a" href="https://www.facebook.com/orderzz" target="_blank">
                                <FacebookIcon className={classes.smButton}/>
                            </IconButton>
                        </Grid>
                        <div className={classes.smDivider}></div>
                        <Grid item>
                            <IconButton aria-label="Instagram" className={classes.smButton} component="a" href="https://instagram.com/order.zz" target="_blank">
                                <InstagramIcon className={classes.smButton}/>
                            </IconButton>
                        </Grid>
                        <div className={classes.smDivider}></div>
                        <Grid item>
                            <IconButton aria-label="Twitter" className={classes.smButton} component="a" href="https://twitter.com/tryOrderzz" target="_blank">
                                <TwitterIcon className={classes.smButton}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CommingSoon;