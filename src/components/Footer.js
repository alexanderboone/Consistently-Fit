import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import SvgLinkedInIcon from '@material-ui/icons/LinkedIn';
import SvgGitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    copyrightStyle: {
        backgroundColor: '#171738',
        color: '#e8f1f2',
        textAlign: 'center',
        minHeight: '5em',
        padding: '1em',
    },
    socialMedia: {
        display: 'flex',
        justifyContent: 'center',
    },
    iconStyle: {
        margin: '1em 0.3em',
    },
})

export default function Footer(props) {
    const classes = useStyles()
    
    return (
        <footer className={classes.copyrightStyle}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>&copy; {new Date().getFullYear()}  Alex Boone. All rights reserved.</Typography>
                </Grid>
                <Grid item xs={12} className={classes.socialMedia}>
                    <a href="https://www.linkedin.com/in/alexanderboone/"><SvgLinkedInIcon className={classes.iconStyle}></SvgLinkedInIcon></a>
                    <a href="https://github.com/alexanderboone/"><SvgGitHubIcon className={classes.iconStyle}></SvgGitHubIcon></a>
                </Grid>
            </Grid>
        </footer>
    )
}