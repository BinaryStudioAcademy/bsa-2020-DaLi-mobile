import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chartWrapper: {
    flexDirection: 'row',
  },
  yAxisLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  yAxisLabelTitle: {
    transform: [{rotate: '-90deg'}],
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  xAxisLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  xAxisLabelTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default styles;
