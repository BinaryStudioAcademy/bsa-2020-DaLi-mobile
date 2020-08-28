import * as React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import styles from './styles';

const ExampleComponent = () => {
  return (
    <View style={styles.exampleContainer}>
      <Title>Example Screen</Title>
    </View>
  );
};

export default ExampleComponent;
