import baseAPIService from './baseApiService';
import config from '../../config/index';

const API_URL = `${config.api.url}/api/visualizations`;

class VisualizationsApiService extends baseAPIService {
  constructor() {
    super(API_URL);
  }

  getVisualizations = () => this.getData('');

  getVisualization = (id) => this.getData(`/${id}`);
}

const visualizationsApiService = new VisualizationsApiService();
export default visualizationsApiService;
