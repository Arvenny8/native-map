import React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";

const data = [
  {
    lat: 13.7563,
    lon: 100.5018,
    tex: "PTT01",
  },
  {
    lat: 13.7503,
    lon: 100.525,
    tex: "OOP02",
  },
  {
    lat: 13.7553,
    lon: 100.52,
    tex: "OOP03",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.7563,
          longitude: 100.5018,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: item.lat, longitude: item.lon }}
          >
            <Callout tooltip>
              <View style={styles.bubble}>
                <Text>{item.tex}</Text>
              </View>
              <Image
                source={require("./assets/img/toilet.jpg")}
                style={{ width: 150, height: 150, zIndex: 1 }}
              />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 16,
    alignSelf: "center",
  },
});
