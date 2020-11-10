import React, { useState } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import ReactCardFlip from 'react-card-flip';

import SvgInfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles({
  rootFront: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rootBack: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
  },
  actionsFront: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
  },
  actionsBack: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
},
  volume: {
      textAlign: 'left'
  },
  pos: {
    marginBottom: 12,
  },
  countText: {
      alignContent: 'center',
      marginBottom: '10%'
  },
  images: {
      width: '4em'
  },
  title: {
      paddingRight: '10%'
  }
});

export default function ExerciseCard(props) {
    const classes = useStyles();
    const [isFlipped, handleFlip] = useState(false)

    function handleClick() {
        handleFlip(!isFlipped)
    }

    return (
        <Grid container justify="center" item>
            <Grid item xs={12}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

                    {/* Front of card */}

                    <Card className={classes.rootFront} raised="true">
                        <CardContent className={classes.flexContent}>

                                    <div>
                                        <Grid item>
                                            <Typography className={classes.countText} variant="h6" component="h6" color="primary">
                                                <strong>{props.ss !== "0" ? "SS" + props.ss + ": " : ""}{props.exerciseName}</strong>
                                            </Typography>
                                        </Grid>
                                    </div>
                                    <div>
                                    <Grid container item spacing={2} wrap="nowrap" justifyContent="space-between" alignItems="flex-end">
                                        <Grid container item spacing={2}>
                                            <Grid item>
                                                <Typography className={classes.volume} variant="h6" component="h6" color="primary">  
                                                    {props.numSets}
                                                    <br/>
                                                    <strong>Sets</strong>
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.volume} variant="h6" component="h6" color="primary">
                                                    {props.numReps}
                                                    <br/>
                                                    <strong>Reps</strong>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={handleClick} color="primary" size="large"><SvgInfoIcon fontSize="large" color="primary"></SvgInfoIcon></Button>
                                        </Grid>
                                    </Grid>
                                    </div>
                        </CardContent>
                    </Card>

                    {/* Back of card - shown when flipped*/}

                    <Card className={classes.rootBack} raised="true">

                        <CardContent className={classes.flexContent}>
                                <Typography className={classes.title} variant="h6" component="h6" color="primary">
                                    Execution:
                                </Typography>
                                <Typography className={classes.title} variant="body2" component="body2" color="primary">
                                    {props.exerciseData[props.exerciseName]}
                                </Typography>
                        </CardContent>

                        <CardActions className={classes.actionsBack}>
                            <Button onClick={handleClick} color="primary" size="large"><SvgInfoIcon fontSize="large" color="primary"></SvgInfoIcon></Button>
                        </CardActions>

                    </Card>
                </ReactCardFlip>
            </Grid>
        </Grid>
    )
}