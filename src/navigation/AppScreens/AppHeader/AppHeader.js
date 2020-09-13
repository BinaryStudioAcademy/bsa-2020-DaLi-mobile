import React from 'react';
import {Appbar, Text} from 'react-native-paper';
import styles from './styles';

const AppHeader = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  return (
    <Appbar.Header>
      {previous && (
        <Appbar.BackAction color="#fff" onPress={navigation.goBack} />
      )}
      <Appbar.Content
        title={<Text style={styles.headerTitle}> {options.headerTitle} </Text>}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
