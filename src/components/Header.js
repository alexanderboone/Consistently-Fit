import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

export default function Header(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <FitnessCenterIcon />
                <Typography variant="h6" color="secondary">
                    This is the App Bar.
                </Typography>
            </Toolbar>
        </AppBar>
    )
}