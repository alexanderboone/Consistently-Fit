import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles({
    iconStyles: {
        padding: '0% 2% 0% 0%'
    },
    typographyStyles: {
        flex: 1
    }
})

export default function Header(props) {
    const classes = useStyles()
    
    return (
        <AppBar position="static">
            <Toolbar>
                <FitnessCenterIcon className={classes.iconStyles}/>
                <Typography className={classes.typographyStyles} variant="h5" color="secondary">
                    Workout of the Day
                </Typography>
            </Toolbar>
        </AppBar>
    )
}