import React, { useState } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import ReactCardFlip from 'react-card-flip';

import SvgInfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  flexContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
  },
  volume: {
      textAlign: 'right'
  },
  pos: {
    marginBottom: 12,
  },
  cardLeft: {
      marginRight: 12,
      marginTop: '5%',
      alignItems: 'center',
      display: 'flex',
  },
  countText: {
      alignContent: 'center',
  },
  images: {
      width: '4em'
  }
});

export default function ExerciseCard(props) {
    const classes = useStyles();
    const [isFlipped, handleFlip] = useState(false)

    function handleClick() {
        handleFlip(!isFlipped)
    }

    return (
        <Grid container justify="center" item spacing={1}>
            <Grid item xs={12}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <Card className={classes.root} raised="true">
                        <CardContent className={classes.flexContent}>
                            <CardContent>
                                <Typography className={classes.countText} variant="h4" component="h2" color="primary">
                                    <strong>{props.exerciseName}</strong>
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className={classes.volume} variant="h5" component="h5" color="primary">
                                    {props.numSets} X {props.numReps}
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button onClick={handleClick} color="primary" size="medium"><SvgInfoIcon fontSize="large" color="primary"></SvgInfoIcon></Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} raised="true">
                        <CardContent className={classes.flexContent}>
                            <CardContent>
                                <Typography className={classes.countText} noWrap="true" variant="h4" component="h2" color="primary">
                                    <img className={classes.images} src={props.img}></img>
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className={classes.title} variant="h6" component="h6" color="primary">
                                    {props.exerciseDescription}
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button onClick={handleClick} color="primary" size="medium"><SvgInfoIcon fontSize="large" color="primary"></SvgInfoIcon></Button>
                        </CardActions>
                    </Card>
                </ReactCardFlip>
            </Grid>
        </Grid>
    )
}