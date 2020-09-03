export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

export function calcMinYDataValue(minValue, goal) {
  const min = goal.display ? Math.min(minValue, goal.value) : minValue;
  return min > 0 ? min * 0.7 : min * 1.2;
}

export function calcMaxYDataValue(maxVal, goal) {
  const max = goal.display ? Math.max(maxVal, goal.value) : maxVal;
  return max > 0 ? max * 1.2 : max * 0.7;
}
