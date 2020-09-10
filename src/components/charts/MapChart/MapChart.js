import React from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

const MapChart = (props) => {
  const {data, config, viewWidth, viewHeight} = props;

  const initialRegion = {
    latitude: config.mapCenter.lat,
    longitude: config.mapCenter.lng,
    latitudeDelta: 50,
    longitudeDelta: 50,
  };

  return (
    <MapView
      width={viewWidth}
      height={viewHeight}
      padding={45}
      initialRegion={initialRegion}>
      {data.map((marker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(marker[config.latitude]),
              longitude: Number(marker[config.longitude]),
            }}
            title={marker[config.name]}>
            <View style={styles.mapMarker} />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default MapChart;
