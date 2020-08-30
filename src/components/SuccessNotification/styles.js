import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  successNotification: {
    backgroundColor: '#ddf3d5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  successNotificationTitle: {
    color: '#587250',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  successNotificationMessage: {
    color: '#587250',
  },
});

export default styles;
