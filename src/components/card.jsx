import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#5B90AD',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    justifyContent: 'center',
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} style={{color: "#fff"}} gutterBottom>
          About Image
        </Typography>
        <Typography className={classes.pos} style={{color: "#fff"}}>
          Interesting content
        </Typography>
        <Typography variant="body2" component="p" style={{color: "#fff"}}>
          Intersting sub-content
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="small" style={{color: "#fff"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}