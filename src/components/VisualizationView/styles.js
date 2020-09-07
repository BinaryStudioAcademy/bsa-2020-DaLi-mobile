import {StyleSheet} from 'react-native';
import {
  VISUALIZATION_CONTAINER_WIDTH,
  VISUALIZATION_CONTAINER_HEIGHT,
} from '../../constants';

const styles = StyleSheet.create({
  visualizationContainer: {
    height: '100%',
    backgroundColor: '#fff',
  },
  visualizationWrapper: {
    width: VISUALIZATION_CONTAINER_WIDTH,
    height: VISUALIZATION_CONTAINER_HEIGHT,
  },
});

export default styles;
