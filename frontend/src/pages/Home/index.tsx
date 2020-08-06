import React from 'react';
import { Chart } from "react-google-charts";
import { useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const {xAxis, yAxis, xValues, yValues} = useParams();
  let listXValues = xValues.split('-');
  let listYValues = yValues.split('-');

  return (
    <Chart
    width={'600px'}
    height={'400px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', '2020', '2019'],
      ['Jan', parseFloat(listXValues[0] ), parseFloat(listYValues[0] )],
      ['Fev', parseFloat(listXValues[1] ), parseFloat(listYValues[1] )],
      ['Mar', parseFloat(listXValues[2] ), parseFloat(listYValues[2] )],
      ['Abr', parseFloat(listXValues[3] ), parseFloat(listYValues[3] )],
      ['Mai', parseFloat(listXValues[4] ), parseFloat(listYValues[4] )],
      ['Jun', parseFloat(listXValues[5] ), parseFloat(listYValues[5] )],
      ['Jul', parseFloat(listXValues[6] ), parseFloat(listYValues[6] )],
      ['Ago', parseFloat(listXValues[7] ), parseFloat(listYValues[7] )],
      ['Set', parseFloat(listXValues[8] ), parseFloat(listYValues[8] )],
      ['Out', parseFloat(listXValues[9] ), parseFloat(listYValues[9] )],
      ['Nov', parseFloat(listXValues[10]), parseFloat(listYValues[10])],
      ['Dez', parseFloat(listXValues[11]), parseFloat(listYValues[11])]
    ]}
    options={{
      hAxis: {
        title: xAxis,
      },
      vAxis: {
        title: yAxis,
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