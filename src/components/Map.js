import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(200,20,60,0.5)"
        fillColor="rgba(158,20,255,0.3)"
      />
      <Polyline
        lineDashPattern={[0]}
        strokeColor={"rgba(0, 0, 0,0.3)"}
        strokeWidth={15}
        coordinates={locations.map((loc) => loc.coords)}
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 350,
  },
});
export default Map;
