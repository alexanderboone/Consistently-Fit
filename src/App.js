import React from 'react'
import './App.css'

import { Grid } from '@material-ui/core'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item direction="row" justify='center' xs={12}>
          <Content />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
