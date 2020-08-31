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
