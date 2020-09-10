import React from 'react';
import {
  BarChart,
  LineChart,
  TableChart,
  MapChart,
  TableDashboardChart,
} from '../components/charts';

export const getIcon = (visualizationType) => {
  switch (visualizationType) {
    case 'BAR_CHART':
      return 'chart-bar';
    case 'LINE_CHART':
      return 'chart-line';
    case 'TABLE':
      return 'table';
    case 'MAP':
      return 'map';
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
    case 'MAP':
      return <MapChart {...componentProps} />;
    default:
      return null;
  }
};

export const getDashboardComponent = (
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
      return <MapChart {...componentProps} />;
    case 'MAP':
      return <TableDashboardChart {...componentProps} />;
    default:
      return null;
  }
};

export const parseConfig = (config) => JSON.parse(config);
