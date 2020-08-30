import baseAPIService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/dashboards`;

class DashboardsApiService extends baseAPIService {
  constructor() {
    super(API_URL);
  }

  getDashboards = () => this.getData('');
}

const dashboardsApiService = new DashboardsApiService();
export default dashboardsApiService;
