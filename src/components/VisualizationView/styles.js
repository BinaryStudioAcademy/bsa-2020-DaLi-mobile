import {StyleSheet} from 'react-native';
import {
  VISUALIZATION_CONTAINER_WIDTH,
  VISUALIZATION_CONTAINER_HEIGHT,
} from '../../constants';

const styles = StyleSheet.create({
  visualizationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualizationWrapper: {
    width: VISUALIZATION_CONTAINER_WIDTH,
    height: VISUALIZATION_CONTAINER_HEIGHT,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    // background color must be set
    backgroundColor: '#fff',
  },
});

export default styles;
