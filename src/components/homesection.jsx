import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import ocean from '../images/ocean.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(20, 10, 20),
    },
  }));

function HomeSection() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid style={{margin: "auto"}} item xs>
<h1>Ensuring optimal liquidity across crypto</h1>
<p>xLiquidity enables investors of any size to participate in the cryptocurrency market, regardless of exchange or protocol though efficient market making </p>        
<Button href="#" variant="contained" color="#5B90AD" disableElevation>
  Read Whitepaper
</Button>
</Grid>
        <Grid item xs>
        <img src={ocean} height="400px"/>
        </Grid>
      </Grid>
      </div>

    )
}

export default HomeSection;