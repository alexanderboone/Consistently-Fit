import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'

const useStyles = makeStyles({
    typographyStyles: {
        textAlign: 'center',
    }
})

export default function Content(props) {
    const classes = useStyles()
    
    return (
        <div>
        <Typography className={classes.typographyStyles}>This is our content component.</Typography>
        <ExerciseCard numSets="5" numReps="5" exerciseName="Squat" />
        <ExerciseCard numSets="5" numReps="5" exerciseName="Squat" />
        <ExerciseCard numSets="5" numReps="5" exerciseName="Squat" />
        <ExerciseCard numSets="5" numReps="5" exerciseName="Squat" />
        <ExerciseCard numSets="5" numReps="5" exerciseName="Squat" />
        </div>
    )
}