import {API_URL} from 'react-native-dotenv';

const config = {
  api: {
    url: API_URL || 'http://localhost:5000',
  },
};

export default config;
