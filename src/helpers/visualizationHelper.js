import React from 'react';
import {BarChart, LineChart, TableChart} from '../components/charts';

export const getIcon = (visualizationType) => {
  switch (visualizationType) {
    case 'BAR_CHART':
      return 'chart-bar';
    case 'LINE_CHART':
      return 'chart-line';
    case 'TABLE':
      return 'table';
    default:
      return null;
  }
};

export const getComponent = (
  visualizationType,
  id,
  data,
  config,
  viewWidth,
  viewHeight,
) => {
  const componentProps = {id, data, config, viewWidth, viewHeight};
  switch (visualizationType) {
    case 'BAR_CHART':
      return <BarChart {...componentProps} />;
    case 'LINE_CHART':
      return <LineChart {...componentProps} />;
    case 'TABLE':
      return <TableChart {...componentProps} />;
    default:
      return null;
  }
};

export const parseConfig = (config) => JSON.parse(config);
