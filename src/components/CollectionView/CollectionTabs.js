import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CollectionsList from './CollectionList';
import styles from './styles';

const initialLayout = {width: Dimensions.get('window').width};

const CollectionTabs = ({visualizations, dashboards}) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Everything'},
    {key: 'second', title: 'Dashboards'},
    {key: 'third', title: 'Visualizations'},
  ]);

  const sortData = (data) => {
    return data.sort((elem, nextElem) => {
      return new Date(nextElem.updatedAt) - new Date(elem.updatedAt);
    });
  };

  const FirstRoute = () => (
    <CollectionsList
      items={sortData([...visualizations, ...dashboards])}
      type={'all'}
    />
  );

  const SecondRoute = () => (
    <CollectionsList items={dashboards} type={'dashboards'} />
  );

  const ThirdRoute = () => (
    <CollectionsList items={visualizations} type={'visualizations'} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderLabel = ({route, focused}) => {
    return (
      <Text style={[focused && styles.collectionTabLabelFocused]}>
        {route.title}
      </Text>
    );
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.collectionTabIndicator}
      style={styles.collectionTab}
      renderLabel={renderLabel}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default CollectionTabs;
