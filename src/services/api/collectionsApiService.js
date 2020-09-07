import BaseApiService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/collections`;

class CollectionsApiService extends BaseApiService {
  constructor() {
    super(API_URL);
  }

  getCollections = () => this.getData('');

  getCollection = (id) => this.getDataById(`/${id}`);
}

const collectionsApiService = new CollectionsApiService();
export default collectionsApiService;
