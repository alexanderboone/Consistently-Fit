import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'

const useStyles = makeStyles({

})

export default function Content(props) {
    const classes = useStyles()
    
    return (
        <Grid container spacing={2} xs={11} md={8} justify="center">
            <ExerciseCard numSets="6" numReps="15, 12, 10, 8, 8, 6" exerciseName="Back Squat" exerciseDescription= "The barbell back squat is a popular compound movement that emphasizes building the lower-body muscle groups and overall strength. It's the classic way to start a leg day, and is a worthy centerpiece to a lower-body training program." />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
            <ExerciseCard numSets="5" numReps="5" exerciseName="Back Squat" />
        </Grid>
    )
}