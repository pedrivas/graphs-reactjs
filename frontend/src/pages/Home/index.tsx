import React from 'react';
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const {xaxis, yaxis} = useParams();

  return (
    <Chart
    width={'600px'}
    height={'400px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', '2020', '2019'],
      ['Jan', 1500, 2000],
      ['Fev', 3500, 5000],
      ['Mar', 2000, 1200],
      ['Abr', 2560, 2500],
      ['Mai', 1200, 500],
      ['Jun', 5300, 8520],
      ['Jul', 6300, 4520],
      ['Ago', 2700, 1900],
    ]}
    options={{
      hAxis: {
        title: xaxis,
      },
      vAxis: {
        title: yaxis,
      },
      series: {
        1: { curveType: 'function' },
      },
    }}
    rootProps={{ 'data-testid': '2' }}
  />
  )
}

export default Home;