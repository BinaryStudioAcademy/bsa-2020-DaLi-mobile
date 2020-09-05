import baseApiService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/tables`;

class DbTableApiService extends baseApiService {
  constructor() {
    super(API_URL);
  }

  getTableData = (id, settings) => this.postData(`/${id}/data`, settings);
}

const dbTableAPIService = new DbTableApiService();

export default dbTableAPIService;
