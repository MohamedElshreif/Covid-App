import React from 'react';

import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import StyleCard from './cards.module.css';

function Cards({ data }) {
  if (!data.confirmed) {
    return <h2>Loading...</h2>;
  }
  return (
    <Grid
      container
      spacing={3}
      justify='space-around'
      className={StyleCard.Grid}
    >
      <Grid item component={Card} xs={12} md={3} className={StyleCard.infected}>
        <CardContent>
          <Typography color='textSecondary'>Infected</Typography>
          <Typography variant='h5'>
            <CountUp
              start={0}
              end={data.confirmed.value}
              duration={2.5}
              separator=','
            />
          </Typography>
          <Typography color='textSecondary'>
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant='body1'>
            Number of active cases of covid-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={StyleCard.recovered}
      >
        <CardContent>
          <Typography color='textSecondary'>Recovered</Typography>
          <Typography variant='h5'>
            <CountUp
              start={0}
              end={data.recovered.value}
              duration={2.5}
              separator=','
            />
          </Typography>
          <Typography color='textSecondary'>
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant='body1'>
            Number of active cases of covid-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={StyleCard.deaths}>
        <CardContent>
          <Typography color='textSecondary'>Deaths</Typography>
          <Typography variant='h5'>
            <CountUp
              start={0}
              end={data.deaths.value}
              duration={2.5}
              separator=','
            />
          </Typography>
          <Typography color='textSecondary'>
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant='body1'>
            Number of active cases of covid-19
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default Cards;
