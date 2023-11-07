
import React, { useState } from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function MapScreen() {
  const [markerInfo, setMarkerInfo] = useState(null);

  const markers = [
    { id: 1, title: 'Mint Tower', discription : "ห้องน้ำสะอาด", rating : "4.9", coordinate: { latitude: 13.7563, longitude: 100.5018 } },
    { id: 2, title: 'Solfware Park' , discription : "ห้องน้ำสะอาด", rating : "3.7", coordinate: { latitude: 13.7503, longitude: 100.525 } },
    { id: 3, title: 'TEEPK' , discription : "ห้องน้ำสะอาด", rating : "5", coordinate: { latitude: 13.7553 , longitude: 100.52 } },
  ];

  const handleMarkerPress = (marker) => {
    setMarkerInfo(marker);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 13.7563,
          longitude: 100.5018,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      {markerInfo && (
        <View style={styles.markerInfo}>
          <Text style={{color :"#FBBB00", fontSize: 24 , fontWeight:500 , paddingTop :36 , paddingLeft : 36 }}>{markerInfo.title}</Text>
          <Text style={{color :"#D3D3D3", fontSize: 16 , fontWeight:500 , paddingLeft :36}}>{markerInfo.discription}</Text>
          <Text style={{color :"#D3D3D3", fontSize: 16 , fontWeight:500 , paddingLeft :36}}>{markerInfo.rating}</Text>
          <View style={{ display : "flex" , justifyContent : "center", alignItems : "center"}}>
          <TouchableOpacity style={{backgroundColor : "#FBBB00" , alignItems : "center", justifyContent : "center"  , width :350  , height : 60 , borderRadius : 16 , marginTop : 48 }}>
            <Text style={{fontSize : 20 , fontWeight : 500 , color :"#22272B"}}>ดูรายระเอียด</Text>
          </TouchableOpacity>
          </View>
        </View>
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerInfo: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius : 32 ,
    borderTopRightRadius : 32 , 
    width:390,
    height : 281 ,
    backgroundColor: '#1D2022',
    
  },
});

export default MapScreen;
