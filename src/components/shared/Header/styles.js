import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  headerName: {
    textAlign: 'center',
  },
  headerDescription: {
    fontSize: 14,
    marginVertical: 5,
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'center',
  },
});

export default styles;
