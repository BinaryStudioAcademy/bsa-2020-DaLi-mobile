import React from 'react';
import {Title, Subheading} from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const Header = (props) => {
  const {name, description} = props;
  return (
    <View style={styles.header}>
      <Title style={styles.headerName}>{name}</Title>
      {!!description?.length && (
        <Subheading style={styles.headerDescription}>{description}</Subheading>
      )}
    </View>
  );
};

export default Header;
