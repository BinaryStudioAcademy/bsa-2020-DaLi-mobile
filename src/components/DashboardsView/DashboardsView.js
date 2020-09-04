import * as React from 'react';
import PropTypes from 'prop-types';
import {List} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {navigationService} from '../../services';
import styles from './styles';

const DashboardsView = (props) => {
  const {dashboards} = props;
  return (
    <List.Section style={styles.dashboardsList}>
      {dashboards.map((dashboard) => (
        <TouchableOpacity
          key={dashboard.id}
          onPress={() =>
            navigationService.navigate('Dashboard', {id: dashboard.id})
          }>
          <List.Item
            style={styles.dashboardsItem}
            title={dashboard.name}
            description={dashboard.description}
            left={() => (
              <List.Icon style={styles.dashboardsIcon} icon="view-dashboard" />
            )}
          />
        </TouchableOpacity>
      ))}
    </List.Section>
  );
};

DashboardsView.propTypes = {
  dashboards: PropTypes.array,
};

export default DashboardsView;
