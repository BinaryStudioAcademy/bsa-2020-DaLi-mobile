import * as React from 'react';
import {List} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {navigationService} from '../../services';
import * as visualizationHelper from '../../helpers/visualizationHelper';
import {EmptyScreen} from '../shared';
import styles from './styles';

const CollectionList = (props) => {
  const {items, type} = props;
  return !items.length ? (
    <EmptyScreen title={`No ${type}`} />
  ) : (
    <List.Section style={styles.collectionList}>
      {items.map((item) => {
        const route = item.type ? 'Visualization' : 'Dashboard';
        const icon = item.type
          ? visualizationHelper.getIcon(item.type)
          : 'view-dashboard';
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigationService.navigate(route, {id: item.id})}>
            <List.Item
              style={styles.dashboardsItem}
              title={item.name}
              description={item.description}
              left={() => (
                <List.Icon style={styles.collectionItemIcon} icon={icon} />
              )}
            />
          </TouchableOpacity>
        );
      })}
    </List.Section>
  );
};

export default CollectionList;
