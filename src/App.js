import React from 'react'
import './App.css'

import { Grid } from '@material-ui/core'

import Header from './components/Header'
import Footer from './components/Footer'
import TabBar from './components/TabBar'

function App() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item direction="row" justify='center' xs={12}>
          <TabBar />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
