import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import ocean from '../images/ocean.png'
import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(20, 10, 20),
      backgroundColor: '#5B90AD',
      color: '#fff',
    },
  }));

function Footer() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs>
        <img src={logo} height="400px" />
        </Grid>
        <Grid item xs>
<h1>This is the footer section</h1>
<p>A Liquidity Token and Protocol that allows investment into crypto without worrying about volatility and arbitrage. Our token guarantees liquidity at little to no risk.</p>
</Grid>
      </Grid>
      </div>

    )
}

export default Footer;