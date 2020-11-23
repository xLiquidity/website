import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: '#5B90AD',
  },
  media: {
    color: '#fff',
    margin: 'auto',
    padding: theme.spacing(2, 0, 0),
    width: 100
  },
  title: {
    fontSize: 30,
  },
  pos: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 12,
  },
  button: {
    justifyContent: 'center',
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardMedia ><img className={classes.media} src={props.aboutImage} alt="About Image" /></CardMedia>
      <CardContent>
        <Typography className={classes.title} style={{color: "#fff"}}>
         {props.aboutTitle}
        </Typography>
        <Typography className={classes.pos} variant="body2" style={{color: "#fff"}}>
        {props.aboutContent}
        </Typography>
      </CardContent>
      {/* <CardActions className={classes.button}>
        <Button size="small" style={{color: "#fff"}}>Learn More</Button>
      </CardActions> */}
    </Card>
  );
}