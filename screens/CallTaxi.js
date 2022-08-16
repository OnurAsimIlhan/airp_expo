import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
const CallTaxi = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#72cfe7ff"
      },
      headerTitleAlign: "center",
      title: "Taksi Çağır"
    });
  }, []);
  useEffect(() => {
    fetchNearbyPlaces()
  }, []);

  var places = [] // This Array WIll contain locations received from google
  const [taxiPlaces, setTaxiPlaces] = useState('')

  const fetchNearbyPlaces = async () => {
    const latitude = 39.8746;
    const longitude = 32.7476;
    let radius = 4 * 1000;

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radius + '&type=' + 'taxi_stand' + '&key=' + 'AIzaSyDR-e7tnvH4F5SFR_YWs1I2etAZAXmloRo';

    await fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {

        for (let googlePlace of res.results) {
          var place = {}
          var lat = googlePlace.geometry.location.lat;
          var lng = googlePlace.geometry.location.lng;
          var coordinate = {
            latitude: lat,
            longitude: lng,
          }

          
          place['placeTypes'] = googlePlace.types
          place['coordinate'] = coordinate
          place['placeId'] = googlePlace.place_id
          place['placeName'] = googlePlace.name
          

          places.push(place);
        }
        
        console.log(
          'Taksi = ' +
          places.map(nearbyPlaces => nearbyPlaces.placeName),
        );
        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });
      setTaxiPlaces(places)



  };
  
  const getMoreDetails = async () => {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id='+  + '&key=AIzaSyDR-e7tnvH4F5SFR_YWs1I2etAZAXmloRo'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.result.formatted_phone_number)
    return data.result.formatted_phone_number
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        showsUserLocation
        mapType="mutedStandard"
        initialRegion={{
          latitude: 39.8746,
          longitude: 32.7476,
          longitudeDelta: 0.05,
          latitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 39.8746,
            longitude: 32.7476
          }}
        >
          <Callout>
            <Text>Here</Text>
          </Callout>
        </Marker>

        <Marker
        
          coordinate={{
            latitude: 39.8746,
            longitude: 32.7476
          }}
        >
          <Callout>
            <Text>Here</Text>
          </Callout>
        </Marker>

        {taxiPlaces[0] != null && taxiPlaces.map((marker, index) => (
            <Marker
                
                key = {index}
                coordinate = {{
                    latitude: marker.coordinate.latitude,
                    longitude: marker.coordinate.longitude
                }}
                title = { marker.placeName }
            >
            <Callout></Callout>
          </Marker>
        ))
      }
        
      </MapView>
     
    </View>
  );
}

export default CallTaxi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});