import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'

const useStyles = makeStyles({
    typographyStyles: {
        textAlign: 'left',
    },
    infoStyles: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
    }
})

export default function Workouts(props) {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [State, setState] = useState({})

    useEffect(() => {
        const exercises = `https://exercises-rest-api.herokuapp.com/api/exercises/?format=json`
        setLoading(true)
        function mapData(arr) {
            let exercise_dict = {}
            for (var i=0; i < arr.length; i++) {
                exercise_dict[arr[i]['name']] = arr[i]['description']
            }
            return exercise_dict
        }
        fetch(exercises, { method: 'GET', mode: 'cors' })
            .then(response => response.json())
            .then(dataArray => {
                setState(mapData(dataArray))
            })
        setLoading(false)
    }, [setLoading, setState])


    function createExerciseCard(exerciseName, numSets, numReps, exerciseData=State) {
        return (
            <ExerciseCard exerciseName={exerciseName} numSets={numSets} numReps={numReps} exerciseData={exerciseData} />
        )
    }


    if (loading) {
        return (<Typography>Loading...</Typography>)
    }
   else {
        switch (props.muscleGroup) {
            case 'Chest & Abs':
                return (
                    <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                        <div className={classes.infoStyles}>
                            <Typography className={classes.typographyStyles} variant="h3">{props.muscleGroup}</Typography>
                        </div>
                        {createExerciseCard("BB Bench Press", "5", "6 - 8")}
                        {createExerciseCard("Incline DB Press", "4", "8 - 12")}
                        {createExerciseCard("Cable Chest Fly", "4", "15")}
                        {createExerciseCard("Hammer Grip Incline DB Press", "3", "10 - 12")}
                        {createExerciseCard("Leverage Decline Press", "4", "Burnout")}
                        {createExerciseCard("Cable Crunches", "4", "15 - 20")}
                        {createExerciseCard("Twisting Hanging Leg Raises", "4", "15 - 20")}
                    </Grid>
                )
            case 'Back':
                return (
                    <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                        <ExerciseCard numSets="5" numReps="15, 12, 10, 8, 8" exerciseName="Deadlifts" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="6 - 10" exerciseName="Pull-ups" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="10 - 12" exerciseName="Unilateral DB Rows" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="10 - 12" exerciseName="Behind-the-neck Lat Pulldowns" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="MAX" exerciseName="Back Hyperextensions" exerciseDescription= "" />
                    </Grid>
                )
            case 'Shoulders':
                return (
                    <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                        <ExerciseCard numSets="5" numReps="6" exerciseName="Barbell Overhead Press" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="SS1: Barbell Upright Row" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="SS2: Behind-the-neck Seated Smith Press" exerciseDescription= "" />
                        <ExerciseCard numSets="5" numReps="10 - 12" exerciseName="Dumbbell Lateral Raises" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="Cable Face Pull" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="DB Shrugs" exerciseDescription= "" />
                    </Grid>
                )
            case 'Arms':
                return (
                    <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                        <ExerciseCard numSets="5" numReps="8 - 10" exerciseName="SS1: BB Curls" exerciseDescription= "" />
                        <ExerciseCard numSets="5" numReps="8 - 10" exerciseName="SS2: Narrow-grip BB Bench Press" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="SS1: Preacher Curl" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="SS2: Narrow-Grip Dips" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="SS1: Incline DB Curls" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="12 - 15" exerciseName="SS2: Cable Pushdowns" exerciseDescription= "" />
                        <ExerciseCard numSets="1" numReps="RTR" exerciseName="RTR Hammer Curls" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="15 - 20" exerciseName="BB Wrist Curls" exerciseDescription= "" />
                    </Grid>
                )
            case 'Legs':
                return (
                    <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                        <ExerciseCard numSets="6" numReps="15, 12, 10, 8, 8, 6" exerciseName="Back Squat" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="Leg Press" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="Dumbbell RDLs" exerciseDescription= "" />
                        <ExerciseCard numSets="4" numReps="20" exerciseName="Lunges" exerciseDescription= "" />
                        <ExerciseCard numSets="3" numReps="15 - 20" exerciseName="Lying Leg Curls" exerciseDescription= "" />
                    </Grid>
                )
            default:
                return (
                    <Typography>No {props.muscleGroup} workout for today.</Typography>
                )
        }
        }
    }