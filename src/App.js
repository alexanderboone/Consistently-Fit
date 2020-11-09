import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

import { Grid, makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './components/Header'
import Footer from './components/Footer'
import TabBar from './components/TabBar'

const useStyles = makeStyles({
  loadingStyles: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '100%',
      marginTop: '50vh',
  }
})

function App() {
  const [loading, setLoading] = useState(true)
  const [State, setState] = useState({})
  const classes = useStyles()

  useEffect(() => {
    const exercisesUrl = `https://exercises-rest-api.herokuapp.com/api/exercises/?format=json`
    setLoading(true)

    function mapData(arr) {
        let exercise_dict = {}
        for (var i=0; i < arr.length; i++) {
            exercise_dict[arr[i]['name']] = arr[i]['description']
        }
        return exercise_dict
    }
    const getExerciseData = async () => {
        const response = await axios.get(exercisesUrl);
        setState(mapData(response.data));
        return response.data;
    };
    getExerciseData()
    setLoading(false)
  }, [setLoading, setState])

  if (loading) {
    return (
    <div>
      <Grid container direction="column" spacing={0}>
        <Grid className={classes.loadingStyles} item xs={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
    
    )
  }
  else {
    return (
    <div className="App">
      <Grid container direction="column" spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item direction="row" justify='center' xs={12}>
          <TabBar State={State} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
}

export default App;
