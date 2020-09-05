import {StyleSheet} from 'react-native';
import {
  DASHBOARD_VISUALIZATION_HEIGHT,
  DASHBOARD_VISUALIZATION_WIDTH,
} from '../../constants';

const styles = StyleSheet.create({
  dashboardHeader: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  dashboardHeaderName: {
    textAlign: 'center',
  },

  dashboardHeaderDescription: {
    fontSize: 14,
    marginVertical: 5,
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'center',
  },
  dashboardVisualizationList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dashboardVisualizationContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    width: DASHBOARD_VISUALIZATION_WIDTH,
  },

  dashboardVisualizationHeader: {
    padding: 20,
    borderBottomColor: '#f3f4f4',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },

  dashboardVisualizationName: {
    fontSize: 16,
  },

  dashboardVisualizationNameDescription: {
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 10,
  },

  dashboardVisualization: {
    height: DASHBOARD_VISUALIZATION_HEIGHT,
  },
});

export default styles;
