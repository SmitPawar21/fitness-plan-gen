import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export const LineGraph = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['19-09-2024', '10-10-2024', '04-11-2024'] }]}
      series={[{ data: [76,74,71] }, { data: [50,45,43] }]}
      width={600}
      height={200}
    />
  );
}
