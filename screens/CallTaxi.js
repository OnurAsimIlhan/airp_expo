import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
  const fetchNearbyPlaces = async () => {
    const latitude = 39.8746;
    const longitude = 32.7476;
    let radius = 4 * 1000;

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radius + '&key=' + 'AIzaSyDR-e7tnvH4F5SFR_YWs1I2etAZAXmloRo';

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {

      var places = [] // This Array WIll contain locations received from google
        for(let googlePlace of res.results) {
          var place = {}
          var lat = googlePlace.geometry.location.lat;
          var lng = googlePlace.geometry.location.lng;
          var coordinate = {
            latitude: lat,
            longitude: lng,
          }

          var gallery = []

          if (googlePlace.photos) {
           for(let photo of googlePlace.photos) {
             var photoUrl = Urls.GooglePicBaseUrl + photo.photo_reference;
             gallery.push(photoUrl);
          }
        }

          place['placeTypes'] = googlePlace.types
          place['coordinate'] = coordinate
          place['placeId'] = googlePlace.place_id
          place['placeName'] = googlePlace.name
          place['gallery'] = gallery

          places.push(place);
        }

        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });
    
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
            <Text>I am here</Text>
          </Callout>
        </Marker>
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