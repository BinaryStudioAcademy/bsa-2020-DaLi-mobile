import * as React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import styles from './styles';

const EmptyScreen = (props) => {
  const {title} = props;

  return (
    <View style={styles.emptyScreenContainer}>
      <Title style={styles.emptyScreenTitle}> {title}</Title>
    </View>
  );
};

export default EmptyScreen;
