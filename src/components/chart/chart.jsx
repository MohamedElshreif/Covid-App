import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Bar } from 'react-chartjs-2';
import Style from './chart.module.css';

function Chart({ dataCountry, country }) {
  const barChart = dataCountry.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Death'],
        datasets: [
          {
            label: 'people',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [
              dataCountry.confirmed.value,
              dataCountry.recovered.value,
              dataCountry.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State In ${country}` },
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  ) : null;
  return <div className={Style.chartContainer}>{barChart}</div>;
}

export default Chart;
