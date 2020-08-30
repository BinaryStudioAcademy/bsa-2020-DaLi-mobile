import AsyncStorage from '@react-native-community/async-storage';

class StorageService {
  constructor() {
    this.appNameSpace = 'DaLi:';
  }

  set = async (key, value) => {
    try {
      await AsyncStorage.setItem(this.appNameSpace + key, value);
    } catch (e) {
      console.log(e);
    }
  };

  get = async key => {
    let value = null;
    try {
      value = await AsyncStorage.getItem(this.appNameSpace + key);
    } catch (e) {
      console.log(e);
    }
    return value;
  };

  remove = async key => {
    try {
      await AsyncStorage.removeItem(this.appNameSpace + key);
    } catch (e) {
      console.log(e);
    }
  };
}

const storageService = new StorageService();
export default storageService;
