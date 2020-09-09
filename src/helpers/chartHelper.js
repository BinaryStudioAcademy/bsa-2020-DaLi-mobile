export const createGoalLineData = (data, yAxisValue) => {
  const goalLineData = data.map((_item, index) => ({
    x: index + 1,
    y: yAxisValue,
  }));

  return [
    {x: 0, y: yAxisValue},
    ...goalLineData,
    {x: data.length + 1, y: yAxisValue},
  ];
};

export const createBarData = (data, xAxis, yAxis) => {
  return data.map((item, index) => ({
    x: `${index + 1}.${item[xAxis]}`,
    y: item[yAxis],
  }));
};
