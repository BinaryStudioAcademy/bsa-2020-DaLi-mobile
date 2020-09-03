import baseApiService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/tables`;

class DbTableApiService extends baseApiService {
  constructor() {
    super(API_URL);
  }

  getTable = (id) => this.getDataById(`/${id}/data`);
}

const dbTableAPIService = new DbTableApiService();

export default dbTableAPIService;
