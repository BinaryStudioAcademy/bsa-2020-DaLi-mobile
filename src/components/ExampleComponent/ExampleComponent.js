import * as React from 'react';
import {Title} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const ExampleComponent = () => {
  return (
    <View style={styles.exampleContainer}>
      <Title>Example Screen</Title>
    </View>
  );
};

export default ExampleComponent;
