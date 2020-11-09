import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'

export default function Workouts(props) {

    function createExerciseCard(exerciseName, numSets, numReps, ss="0", exerciseData=props.State) {
        return (
            <ExerciseCard exerciseName={exerciseName} numSets={numSets} numReps={numReps} ss={ss} exerciseData={exerciseData} />
        )
    }

    switch (props.muscleGroup) {
        case 'Chest & Abs':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    {createExerciseCard("BB Bench Press", "5", "6-8")}
                    {createExerciseCard("Incline DB Press", "4", "8-12")}
                    {createExerciseCard("Cable Chest Fly", "4", "15")}
                    {createExerciseCard("Hammer Grip Incline DB Press", "3", "10-12")}
                    {createExerciseCard("Leverage Decline Press", "4", "Burnout")}
                    {createExerciseCard("Cable Crunches", "4", "15-20", "1")}
                    {createExerciseCard("Twisting Hanging Leg Raises", "4", "15-20", "2")}
                </Grid>
            )
        case 'Back':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    {createExerciseCard("BB Deadlift", "5", "15, 12, 10, 8, 8")}
                    {createExerciseCard("Pull-up", "4", "6-10")}
                    {createExerciseCard("Unilateral DB Row", "3", "10-12")}
                    {createExerciseCard("Behind-the-neck Lat Pulldown", "4", "10-12")}
                    {createExerciseCard("Back Hyperextension", "3", "MAX")}
                </Grid>
            )
        case 'Shoulders':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    {createExerciseCard("BB Overhead Press", "5", "6")}
                    {createExerciseCard("BB Upright Row", "3", "8-12", "1")}
                    {createExerciseCard("Behind-the-neck Seated Smith Press", "3", "8-12", "2")}
                    {createExerciseCard("DB Lateral Raises", "5", "10-12")}
                    {createExerciseCard("Cable Face Pull", "3", "12-15", "1")}
                    {createExerciseCard("DB Shrugs", "3", "12-15", "2")}
                </Grid>
            )
        case 'Arms':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    {createExerciseCard("BB Curl", "5", "8-10", "1")}
                    {createExerciseCard("Narrow-grip BB Bench Press", "5", "8-10", "2")}
                    {createExerciseCard("BB Preacher Curl", "4", "12-15", "1")}
                    {createExerciseCard("Dips", "4", "12-15", "2")}
                    {createExerciseCard("Incline DB Curl", "3", "12-15", "1")}
                    {createExerciseCard("Cable Pressdown", "3", "12-15", "2")}
                    {createExerciseCard("RTR Hammer Curl", "1", "RTR")}
                    {createExerciseCard("BB Wrist Curl", "4", "15-20")}
                </Grid>
            )
        case 'Legs':
            return (
                <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
                    {createExerciseCard("Back Squat", "6", "15, 12, 10, 8, 8, 6")}
                    {createExerciseCard("Leg Press", "4", "12-15")}
                    {createExerciseCard("DB RDL", "3", "8-12")}
                    {createExerciseCard("Lunge", "4", "20")}
                    {createExerciseCard("Lying Leg Curl", "3", "15-20")}
                </Grid>
            )
        default:
            return (
                <Typography>No {props.muscleGroup} workout for today.</Typography>
            )
    }
}