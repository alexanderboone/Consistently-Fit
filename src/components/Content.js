import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'

const useStyles = makeStyles({

})

export default function Content(props) {
    const classes = useStyles()
    
    return (
        <Grid container spacing={2} xs={11} md={8} justify="center">
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
        </Grid>
    )
}