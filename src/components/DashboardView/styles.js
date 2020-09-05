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
    marginVertical: 10,
    marginHorizontal: 20,
  },

  dashboardHeader: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
  },
  dashboardHeaderTitle: {
    textAlign: 'center',
  },
});

export default styles;
