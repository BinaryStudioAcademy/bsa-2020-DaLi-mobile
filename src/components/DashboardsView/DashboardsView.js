import * as React from 'react';
import PropTypes from 'prop-types';
import {List} from 'react-native-paper';
import styles from './styles';

const DashboardsView = props => {
  const {dashboards} = props;
  return (
    <List.Section style={styles.dashboardsList}>
      <List.Subheader style={styles.dashboardsTitle}>Dashboards</List.Subheader>
      {dashboards.map(dashboard => (
        <List.Item
          key={dashboard.id}
          style={styles.dashboardsItem}
          title={dashboard.name}
          description={dashboard.description}
          left={() => (
            <List.Icon style={styles.dashboardsIcon} icon="view-dashboard" />
          )}
        />
      ))}
    </List.Section>
  );
};

DashboardsView.propTypes = {
  dashboards: PropTypes.array,
};

export default DashboardsView;
