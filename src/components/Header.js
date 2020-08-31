import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import SvgFitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles({
    toolbarStyles: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconStyles: {
        padding: '0% 0% 0% 0%'
    },
    typographyStyles: {
    },
    navBarStyles: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: "100%",
        padding: "0 0 0 1em",
    },
    navButtonStyles: {
        padding: "0.5em"
    }
})

export default function Header(props) {
    const classes = useStyles()
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbarStyles}>
                <Button>
                    <a href="/">
                        <Typography className={classes.typographyStyles} variant="h4" color="secondary">
                        <strong><em>CF</em></strong>
                        </Typography>
                    </a>
                </Button>
                <div className={classes.navBarStyles}>
                    <Button className={classes.navButtonStyles} color="secondary" size="small">
                        <Typography className={classes.typographyStyles} color="secondary" variant="body1">
                        <a href="/"><strong>Workouts</strong></a>
                        </Typography>
                    </Button>
                </div>
                <a href="/"><SvgFitnessCenterIcon className={classes.iconStyles}/></a>
            </Toolbar>
        </AppBar>
    )
}