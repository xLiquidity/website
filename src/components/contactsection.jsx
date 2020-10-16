import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import contact from '../images/contact.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(10, 10, 20),
    },
  }));

function ContactSection() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <h1>Get notified on xLiquidity</h1>
      <Grid container spacing={10}>
        <Grid item xs>
        <img src={contact} height="400px" />
        </Grid>
        <Grid style={{margin: "auto"}} item xs>
<h1>This will be an email input section</h1>
<p>Form to set email</p>
</Grid>
      </Grid>
      </div>


    )
}

export default ContactSection;