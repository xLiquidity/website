import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SimpleCard from './card'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(10, 10, 20),
    },
  }));

function AboutSection() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
        <h1>About xLiquidity</h1>
      <Grid container spacing={10}>
        <Grid item xs>
<SimpleCard/>
</Grid>
<Grid item xs>
<SimpleCard/>
</Grid>
<Grid item xs>
<SimpleCard/>
</Grid>
      </Grid>
      </div>

    )
}

export default AboutSection;