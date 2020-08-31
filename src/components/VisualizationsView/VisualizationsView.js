import * as React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';
import {visualizationHelper} from '../../helpers';
import styles from './styles';
import {navigationService} from '../../services';

const VisualizationsView = (props) => {
  const {visualizations} = props;
  return (
    <List.Section style={styles.visualizationsList}>
      {visualizations.map((visualization) => (
        <TouchableOpacity
          key={visualization.id}
          onPress={() =>
            navigationService.navigate('Visualization', {id: visualization.id})
          }>
          <List.Item
            style={styles.visualizationsItem}
            title={visualization.name}
            description={visualization.description}
            left={() => (
              <List.Icon
                style={styles.visualizationsIcon}
                icon={visualizationHelper.getIcon(visualization.type)}
              />
            )}
          />
        </TouchableOpacity>
      ))}
    </List.Section>
  );
};

VisualizationsView.propTypes = {
  visualizations: PropTypes.array,
};

export default VisualizationsView;
