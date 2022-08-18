import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { set } from 'react-hook-form';
import { Linking } from 'react-native'
import { PhoneIcon } from 'react-native-heroicons/solid';
import LoadingScreen from './LoadingScreen';
import * as Animateable from 'react-native-animatable'

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
  const [taxiData, setTaxiData] = useState('')
  const [loading, setLoading] = useState(false)
  const fetchNearbyPlaces = async () => {

    const latitude = 39.8746;
    const longitude = 32.7476;
    let radius = 4 * 1000;

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radius + '&type=' + 'taxi_stand' + '&key=' + 'AIzaSyDR-e7tnvH4F5SFR_YWs1I2etAZAXmloRo';
    setLoading(false)
    console.log(loading)
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
    pressMarker(places[0]);

    setTimeout(()=>{setLoading({loading: true})}, 3000);
    console.log(loading)

  };


  const pressMarker = async (i) => {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id=' + i.placeId + '&key=AIzaSyDR-e7tnvH4F5SFR_YWs1I2etAZAXmloRo'

    const data = await fetch(url)
      .then(response => {
        return response.json()
      })
    const taxiInfo = { phone: data.result.formatted_phone_number, name: i.placeName, id: i.placeId }
    console.log(data.result.formatted_phone_number)
    setTaxiData(taxiInfo)

  };



  return (

    <View className='flex-1 justify-end'>



      <MapView className='flex-1 static'
        showsUserLocation
        mapType="mutedStandard"
        initialRegion={{
          latitude: 39.8746,
          longitude: 32.7476,
          longitudeDelta: 0.07,
          latitudeDelta: 0.07,
        }}
      >
        <Marker

          pinColor='#0fff'
          coordinate={{
            latitude: 39.8746,
            longitude: 32.7476
          }}
        >
          <Callout>

          </Callout>
        </Marker>



        {taxiPlaces[0] != null && taxiPlaces.map((marker, index) => (
          <MapView.Marker
            onPress={() => pressMarker(marker)}
            key={index}
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude
            }}
            title={marker.placeName}
          >
          </MapView.Marker>
        ))
        }

      </MapView>
      
      <View className='absolute z-40 items-center'>
      {loading ? (null) : (
        <View className=' rounded-full bg-[#72cfe7ff] items-center w-80 h-80 mb-20'>
          <View className=''>
            <Animateable.Image
              
              source={require("../assets/loading.gif")}
              iterationCount={1}
              className="h-48 w-48 mt-20"
            />
          </View>
        </View>)}
        <SafeAreaView className=" mx-3 w-96 ">

          <View className='p-4 my-4 bg-white flex-row justify-between shadow-xl rounded-xl border-2 border-gray-200'>
            <View>
              <Text className='font-bold text-xl mb-4'>{taxiData.name}</Text>

              <View className='flex-row items-center'>
                <Text className='text-lg'>{taxiData.phone}  </Text>
                <TouchableOpacity
                  onPress={() => { Linking.openURL(`tel:${taxiData.phone}`) }}
                  className=''>
                  <PhoneIcon size={30} color='#46B210' />
                </TouchableOpacity>
                <Text></Text>
              </View>


              <TouchableOpacity
                className='bg-[#72cfe7ff] justify-center rounded-lg my-5 h-10 w-24'>
                <Text className='text-center font-bold'>Hemen Çağır</Text>
              </TouchableOpacity>

            </View>

            <View className='my-5'>
              <Image source={require('../assets/taxi.png')}
                className='h-20 w-20 mx-3 my-2'
              />
            </View>

          </View>

        </SafeAreaView>

      </View>
      <View className='bg-[#72cfe7ff] h-10 rounded-t-lg z-0'>

      </View>
    </View>
  );
}

export default CallTaxi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});