import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MapView from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';

const CallTaxi = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Taksi Çağır"
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        mapType="mutedStandard"
        initialRegion={{
          latitude:39.8746,
          longitude:32.7476,
          longitudeDelta: 0.05,
          latitudeDelta: 0.05,
        }}
      />
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