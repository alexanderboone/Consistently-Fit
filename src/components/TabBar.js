import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Workouts from './Workouts'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography className={classes.boxStyles}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tabPanelStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    boxStyles: {
      display: 'flex',
      justifyContent: 'center',
    }
  }));

export default function TabBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="workout split"
                >
                <Tab label="Chest & Abs" {...a11yProps(0)} />
                <Tab label="Back" {...a11yProps(1)} />
                <Tab label="Shoulders" {...a11yProps(2)} />
                <Tab label="Arms" {...a11yProps(3)} />
                <Tab label="Legs" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanelStyle} value={value} index={0}>
                <Workouts muscleGroup="Chest & Abs" State={props.State}/>
            </TabPanel>
            <TabPanel className={classes.tabPanelStyle} value={value} index={1}>
                <Workouts muscleGroup="Back" State={props.State}/>
            </TabPanel>
            <TabPanel className={classes.tabPanelStyle} value={value} index={2}>
                <Workouts muscleGroup="Shoulders" State={props.State}/>
            </TabPanel>
            <TabPanel className={classes.tabPanelStyle} value={value} index={3}>
                <Workouts muscleGroup="Arms" State={props.State}/>
            </TabPanel>
            <TabPanel className={classes.tabPanelStyle} value={value} index={4}>
                <Workouts muscleGroup="Legs" State={props.State}/>
            </TabPanel>
        </div>
    )
}
