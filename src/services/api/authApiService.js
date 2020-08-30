import baseAPIService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/auth`;

class AuthAPIService extends baseAPIService {
  constructor() {
    super(API_URL);
  }

  loginUser = data => {
    console.log(API_URL);
    return this.postData('/login', data);
  };

  getCurrentUser = () => {
    return this.getData('/user', '');
  };
}

const authAPIService = new AuthAPIService();
export default authAPIService;
