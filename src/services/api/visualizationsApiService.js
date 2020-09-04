import baseApiService from './baseApiService';
import dbTableApiService from './dbTableApiService';
import config from '../../config/index';
import * as visualizationHelper from '../../helpers/visualizationHelper';

const API_URL = `${config.api.url}/api/visualizations`;

class VisualizationsApiService extends baseApiService {
  constructor() {
    super(API_URL);
  }

  getVisualizations = () => this.getData('');

  getVisualization = async (id) => {
    const {config: visualizationConfig, ...visualization} = await this.getData(
      `/${id}`,
    );
    const parsedConfig = visualizationHelper.parseConfig(visualizationConfig);
    return {...visualization, config: parsedConfig};
  };

  getVisualizationWithData = async (id) => {
    const {tableId, ...visualization} = await this.getVisualization(id);
    const visualizationData = await dbTableApiService.getTable(tableId);
    return {...visualization, data: visualizationData};
  };
}

const visualizationsApiService = new VisualizationsApiService();
export default visualizationsApiService;
