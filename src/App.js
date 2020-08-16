import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core'

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
