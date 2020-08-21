import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'
import squat_image from './../assets/squat_image.png'

const useStyles = makeStyles({

})

export default function Content(props) {
    const classes = useStyles()
    switch (props.muscleGroup) {
        case 'Chest & Abs':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    <ExerciseCard numSets="5" numReps="6 - 8" exerciseName="BB Bench Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="8 - 12" exerciseName="Incline DB Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="15" exerciseName="Cable Chest Fly" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="10 - 12" exerciseName="Hammer Grip Incline DB Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="Burnout" exerciseName="Leverage Decline Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="15-20" exerciseName="SS1: Cable Crunches" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="15-20" exerciseName="SS2: Twisting Hanging Leg Raises" img={squat_image} exerciseDescription= "" />
                </Grid>
            )
        case 'Back':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    <ExerciseCard numSets="5" numReps="15, 12, 10, 8, 8" exerciseName="Deadlifts" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="6 - 10" exerciseName="Pull-ups" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="10 - 12" exerciseName="Unilateral DB Rows" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="10 - 12" exerciseName="Behind-the-neck Lat Pulldowns" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="Burnout" exerciseName="Back Hyperextensions" img={squat_image} exerciseDescription= "" />
                </Grid>
            )
        case 'Shoulders':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    <ExerciseCard numSets="5" numReps="6" exerciseName="Barbell Overhead Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="SS1: Barbell Upright Row" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="SS2: Behind-the-neck Seated Smith Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="5" numReps="10 - 12" exerciseName="Dumbbell Lateral Raises" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="Cable Face Pull" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="DB Shrugs" img={squat_image} exerciseDescription= "" />
                </Grid>
            )
        case 'Arms':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    <ExerciseCard numSets="5" numReps="8 - 10" exerciseName="SS1: BB Curls" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="5" numReps="8 - 10" exerciseName="SS2: Narrow-grip BB Bench Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="SS1: Preacher Curl" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="SS2: Narrow-Grip Dips" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="SS1: Incline DB Curls" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="SS2: Cable Pushdowns" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="1" numReps="Run the Rack" exerciseName="Run-the-rack Hammer Curls" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="15 - 20" exerciseName="BB Wrist Curls" img={squat_image} exerciseDescription= "" />
                </Grid>
            )
        case 'Legs':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    <ExerciseCard numSets="6" numReps="15, 12, 10, 8, 8, 6" exerciseName="Back Squat" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="Leg Press" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="Dumbbell RDLs" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="4" numReps="20" exerciseName="Lunges" img={squat_image} exerciseDescription= "" />
                    <ExerciseCard numSets="3" numReps="15 - 20" exerciseName="Lying Leg Curls" img={squat_image} exerciseDescription= "" />
                </Grid>
            )
    }
    return (
        <Typography>No {props.muscleGroup} workout for today.</Typography>
    )
}