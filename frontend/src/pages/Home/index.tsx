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
      ['x', xAxis, yAxis],
      ['1º Tri', parseFloat(listXValues[0] ), parseFloat(listYValues[0] )],
      ['2º Tri', parseFloat(listXValues[1] ), parseFloat(listYValues[1] )],
      ['3º Tri', parseFloat(listXValues[2] ), parseFloat(listYValues[2] )],
      ['4º Tri', parseFloat(listXValues[3] ), parseFloat(listYValues[3] )],
    ]}
    options={{
      hAxis: {
        title: 'Valor(R$)',
      },
      vAxis: {
        title: 'Trimestre',
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