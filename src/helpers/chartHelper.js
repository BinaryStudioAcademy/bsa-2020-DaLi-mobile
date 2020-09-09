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

export const createChartData = (data, xAxis, yAxis) => {
  return data.map((item, index) => ({
    x: `${index + 1}.${item[xAxis]}`,
    y: item[yAxis],
  }));
};

export function findYMinMax(arr) {
  let min = arr[0].y,
    max = arr[0].y;

  for (let i = 1, len = arr.length; i < len; i++) {
    let v = arr[i].y;
    min = v < min ? v : min;
    max = v > max ? v : max;
  }

  return [min, max * 1.2];
}
