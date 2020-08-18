import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import ExerciseCard from './ExerciseCard'
import squat_image from './../assets/squat_image.png'

const useStyles = makeStyles({

})

export default function Content(props) {
    const classes = useStyles()
    
    return (
        <Grid container spacing={2} xs={11} md={8} lg={6} justify="center">
            <ExerciseCard numSets="6" numReps="15, 12, 10, 8, 8, 6" exerciseName="Back Squat" img={squat_image} exerciseDescription= "The barbell back squat is a popular compound movement that emphasizes building the lower-body muscle groups and overall strength. It's the classic way to start a leg day, and is a worthy centerpiece to a lower-body training program." />
            <ExerciseCard numSets="4" numReps="12 - 15" exerciseName="Leg Press" img={squat_image} exerciseDescription= "The leg press is a machine exercise targeting the quadriceps. It’s favorite among lifters who prefer the seated position to standing with a load on the spine." />
            <ExerciseCard numSets="3" numReps="8 - 12" exerciseName="Dumbbell RDLs" img={squat_image} exerciseDescription= "The barbell stiff-legged deadlift targets the hamstrings, glutes, lower and upper back, as well as the core. It is a popular accessory movement for the deadlift, but also a muscle-building hamstring movement." />
            <ExerciseCard numSets="4" numReps="20" exerciseName="Lunges" img={squat_image} exerciseDescription= "The forward lunge is a lower-body bodyweight exercise targeting the quads, glutes, and hamstrings. It can also be performed holding dumbbells or other weights. The forward lunge places more emphasis on the quads than other lunge variations." />
            <ExerciseCard numSets="3" numReps="15 - 20" exerciseName="Lying Leg Curls" img={squat_image} exerciseDescription= "The lying leg curl is a popular machine-based exercise for the legs, particularly the hamstrings. It is similar to the seated leg curl, but the open hip angle in the lying leg curl may incorporate more glute and calf activation. It is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of a leg pre-exhaust or as a muscle-building movement for lower-body training." />
        </Grid>
    )
}