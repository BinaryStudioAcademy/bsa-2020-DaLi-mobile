import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  errorNotification: {
    backgroundColor: '#edc9c5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  errorNotificationTitle: {
    color: '#c03a36',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  errorNotificationMessage: {
    color: '#c03a36',
  },
});

export default styles;
