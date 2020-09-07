import * as React from 'react';
import {List} from 'react-native-paper';
import {
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {navigationService} from '../../services';
import styles from './styles';

const CollectionsView = (props) => {
  const {collections, refreshing, onRefresh} = props;
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.collectionsList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <List.Section>
          {collections.map((collection) => (
            <TouchableOpacity
              key={collection.id}
              onPress={() =>
                navigationService.navigate('Collection', {id: collection.id})
              }>
              <List.Item
                title={collection.name}
                description={collection.description}
                left={() => (
                  <List.Icon
                    style={styles.collectionIcon}
                    icon="image-multiple"
                  />
                )}
              />
            </TouchableOpacity>
          ))}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionsView;
