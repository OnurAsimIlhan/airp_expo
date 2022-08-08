import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import LoadingScreen from './LoadingScreen'
import { useNavigation } from '@react-navigation/native';
import TransportUnits from '../components/TransportUnits';

const RouteMaker = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle:{
        backgroundColor:"#72cfe7ff"
      },
      headerTitleAlign: "center",
      title:"Rota Oluştur"
    });
  }, []);
  return (
    <View>
      <TransportUnits/>
    </View>
  )
}

export default RouteMaker