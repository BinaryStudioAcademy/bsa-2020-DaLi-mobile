import * as React from 'react';
import PropTypes from 'prop-types';
import {List} from 'react-native-paper';
import {visualizationHelper} from '../../helpers';
import styles from './styles';

const VisualizationsView = (props) => {
  const {visualizations} = props;
  return (
    <List.Section style={styles.visualizationsList}>
      <List.Subheader style={styles.visualizationsTitle}>
        Visualizations
      </List.Subheader>
      {visualizations.map((visualization) => (
        <List.Item
          key={visualization.id}
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
      ))}
    </List.Section>
  );
};

VisualizationsView.propTypes = {
  visualizations: PropTypes.array,
};

export default VisualizationsView;
