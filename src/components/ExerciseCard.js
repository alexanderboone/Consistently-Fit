import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  flexContent: {
    display: 'flex',
  },
  actions: {
      display: 'flex',
      justifyContent: 'center',
  },
  title: {
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
  }
});

export default function ExerciseCard(props) {
    const classes = useStyles();

    return (
        <Grid container justify="center" item spacing={1}>
            <Grid item xs={12}>
                <Card className={classes.root} raised="true">
                    <CardContent className={classes.flexContent}>
                        <CardContent>
                            <Typography className={classes.countText} noWrap="true" variant="h4" component="h2" color="primary">
                                {props.numSets} X {props.numReps}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography className={classes.title} variant="h4" component="h2" color="primary">
                                {props.exerciseName}
                            </Typography>
                        </CardContent>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button color="primary" size="medium">Definition</Button>
                        <Button color="primary" size="medium">Muscles Targeted</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}