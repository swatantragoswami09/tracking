import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

import { Context as LocationContext } from "../context/LocationContext";
// import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
  // console.log(isFocused, callback);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.top}>
      <Text h2>Create a Track</Text>
      <Map />

      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};
TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};
const styles = StyleSheet.create({
  top: {
    marginTop: 20,
  },
});
export default withNavigationFocus(TrackCreateScreen);
