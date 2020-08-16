import React, { useState } from 'react'
import { Typography, makeStyles } from '@material-ui/core'

export default function ExerciseCard(props) {
    return (
        <Typography>This exercise card calls for {props.numSets} sets of {props.numReps} reps of the {props.exerciseName}.</Typography>
    )
}