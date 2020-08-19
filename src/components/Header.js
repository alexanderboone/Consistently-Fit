import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import SvgFitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles({
    iconStyles: {
        padding: '0% 0% 0% 0%'
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
                <Typography className={classes.typographyStyles} variant="h4" color="secondary">
                    WOTD
                </Typography>
                <SvgFitnessCenterIcon className={classes.iconStyles}/>
            </Toolbar>
        </AppBar>
    )
}