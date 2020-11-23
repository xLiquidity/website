import React from 'react';
import { Grid, makeStyles, IconButton, SvgIcon } from '@material-ui/core';
import TwitterIcon from '../images/contactIcons/twittericon';
import DiscordIcon from '../images/contactIcons/discordicon';
import GitHubIcon from '../images/contactIcons/githubicon';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(10, 10, 20),
      color: '#131C46',
    },
  }));

function ContactSection() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <h1 style={{marginBottom: 50}}>Stay updated on xLiquidity</h1>
<Grid container spacing={5}> 
<Grid item xs style={{margin: "auto"}}>
  <IconButton aria-label="twitter" href="https://twitter.com/XLiquidity">
    <TwitterIcon/>
  </IconButton>
  </Grid>
  <Grid item xs style={{margin: "auto"}}>
  <IconButton aria-label="discord" href="https://discord.gg/htMDawHhF5">
    <DiscordIcon/>
  </IconButton>
  </Grid>
  <Grid item xs style={{margin: "auto"}}>
  <IconButton aria-label="github" href="https://github.com/xliquidity">
    <GitHubIcon/>
  </IconButton>
  </Grid>
  </Grid>
{/* </Grid>
       </Grid> */}
      </div>


    )
}

export default ContactSection;